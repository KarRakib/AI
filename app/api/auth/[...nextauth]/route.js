import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { dbConnect } from '@/utils/mongodb';
import User from '@/models/user';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  
    
    async signIn({ account, profile, user, credentials }) {
      try {
        await dbConnect();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
 
})

export { handler as GET, handler as POST }