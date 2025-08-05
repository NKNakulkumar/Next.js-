import "@/app/globals.css";
import {Roboto, Work_Sans} from 'next/font/google'
import Navigation from "@/components/Navigation";


export const metadata={
  title:{
    default:"Nakul Kumar| Web developement",
    template:"%s | Nakul Kumar",
  },
  description:"Free watching next.js project ,react.js , web developement by nakul Kumar",
  authors:[
    {name:"Nakul kumar"},{name:"Nakul",url:"nakulmenuapp.netlify.app"},
  ],
  keywords:["next.js","react.js","react","fullstack"],
 // metadataBase:new url("https://nakul.com"),
  openGraph:{
    title:"Nakul Kumar",
    description:"Next.js best project and best practices ",
    siteName:"Nakul Kumar",
//     images:[{
// url:"",
// width:1200,
// height:400,
// alt:"Nakul kumar image",
// },
// ],
type:"website",
}
}



const roboto = Roboto({
  subsets:["latin"],
})

const WorkSans = Work_Sans({
  subsets:["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>
        <Navigation/>

        {children}
      {/* <h1> Footer</h1> */}
      </body>
    </html>
  );
} 