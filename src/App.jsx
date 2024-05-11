
import pict from './assets/8635959.jpg'
import pic2 from './assets/team1.jpg'
import pic3 from './assets/team2.png'
import pic1 from './assets/Vision-Mission.webp'
function App() {
  return(<>
    <div className="about_div">
         <h1 className="about">About us</h1>
       </div>
       <div className="content_div">
        <h2 className="who">Who are we?</h2>
            <p className="content_text"> Enhance your digital ownership journey with Noir Dynasty &copy; Exchange and explore a fresh frontier in NFTs, cryptocurrency assets, and service exchange. Trade and barter with assurance on our pioneering platform, reshaping how you engage with the evolving landscape of digital transactions.</p>
        </div>
    <div class = 'img_div'>
    <img class='imag' src={pict}></img>
    </div>
    <div className="mission_div">
        <h2 className="mission">Our Mission</h2>
            <p className="mission_text"> At Noir Dynasty Exchange, our mission is to revolutionize the digital ownership landscape by providing a cutting-edge platform for trading and bartering NFTs, cryptocurrency assets, and services. We are committed to empowering individuals to confidently navigate the digital transaction space while fostering innovation and trust.</p>
        </div>
    <div class = 'img_div'>
    <img class='imag' src={pic1}></img>
    </div>
    <div className="mission_div">
        <h2 className="mission">Our Vision</h2>
            <p className="mission_text"> Our vision at Noir Dynasty Exchange is to redefine the future of digital transactions, where individuals seamlessly exchange assets and services with transparency and security. We aspire to be the premier destination for anyone looking to participate in the dynamic world of NFTs and cryptocurrency, setting new standards for excellence and innovation in the industry.</p>
        </div>
<div className='team_div'>
<h1 class="teamt"> Meet Our Team Members</h1>
<div className="card">
    
        <img src={pic2} className="team1pic"></img>
        
           
         
           <h2> John Doe</h2>
            <p className="text1">Education: MBA in Finance</p>
            <p className="text1">Profession: Blockchain Developer</p>
            <p className="text1">Company: Noir Dynasty&copy;Exchange</p>
            <p className="text1">Contact: john.doe@example.com</p>
           
        </div>
        <div className="card">
    
    <img src={pic3} className="team1pic"></img>
    
       
    <h2> Jane Smith</h2>
        <p className="text1">Education: PHD in Computer Science</p>
        <p className="text1">Profession: AI Specialist</p>
        <p className="text1">Company: Noir Dynasty&copy;Exchange</p>
        <p className="text1">Contact: jane.smith@example.com</p>
    </div>
    <div className="card">
    
    <img src={pic3} className="team1pic"></img>
    
       
    <h2> David Johnson</h2>
        <p className="text1">Education: Bachelor's in Marketing</p>
        <p className="text1">Profession: Marketing Manager</p>
        <p className="text1">Company: Noir Dynasty&copy;Exchange</p>
        <p className="text1">Contact: david.johnson@example.com</p>
       
    </div>
    <div className="card">
    
    <img src={pic2} className="team1pic"></img>
    
       
     
    <h2> David Johnson</h2>
        <p className="text1">Education: Bachelor's in Marketing</p>
        <p className="text1">Profession: Marketing Manager</p>
        <p className="text1">Company: Noir Dynasty&copy;Exchange</p>
        <p className="text1">Contact: david.johnson@example.com</p>
       
    </div> 
<p class = "qborder2"></p>
</div>
<div class = "question">
<h1 class='head1'> Answers to Frequently Asked Questions</h1>
<div className="qdiv">
         <h2> What about Taxes?</h2>
            <p className="text1">We advise Consulting witha tax professional for guidance on tax implications related to transactions on Noir Dynasty&copy;Exchange</p>
           
        </div>
        <div className="qdiv">
            <h2> How do I include barter transactions on my tax return?</h2>
               <p className="text1">We advise Consulting witha tax professional for guidance on tax implications related to transactions on Noir Dynasty&copy;Exchange</p>
              
           </div>
           <div className="qdiv">
            <h2> How do I include barter transactions on my tax return?</h2>
               <p className="text1">We advise Consulting witha tax professional for guidance on tax implications related to transactions on Noir Dynasty&copy;Exchange</p>
              
           </div>
<p class = "qborder"></p>

</div>
<div class='contact'>
<h1 class='head2'>Contact Us</h1>
<div className="loc">
             <h2> Location</h2>
        <p className="text3">123 Noir Venue,City,Country</p>
        </div>
        <div className="loc">
             <h2> Email</h2>
        <p className="text3">info@noirdynasty.com</p>
        </div>
        <div className="loc">
             <h2> Phone</h2>
        <p className="text3">+123 456 7890</p>
        </div>
        <div className="loc">
             <h2>Social Media</h2>
        <p className="text3">&nbsp;&nbsp;Twitter &nbsp; Facebook &nbsp; LinkedIn &nbsp; Instagram </p>
        </div>

<p class = "qborder"></p>
</div>
   


   
    
  </>);
 
}

export default App
