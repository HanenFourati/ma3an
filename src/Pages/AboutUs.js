import React from 'react'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer.js'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'
import img9 from '../Images/img9.jpg'
import './Components/CSSFiles/AboutUs.css'
const images = [
     {imgesrc: img1, hover: 'أدوات طبية'},  
     {imgesrc: img2, hover: 'إصلاح'},  
     {imgesrc: img3, hover: 'دواء'},  
     {imgesrc: img4, hover: 'مواد أولية'}, 
     {imgesrc: img5, hover: 'مواد غذائية'}, 
     {imgesrc: img6, hover: 'خياطة'}, 
     {imgesrc: img7, hover: 'إصلاح'}, 
     {imgesrc: img8, hover: 'كمامات'}, 
     {imgesrc: img9, hover: 'توزيع'}
  ]
function AboutUs () { //style={{backgroundColor: "#c2c4c6"}}
             return ( //<span class='hover-button--off'>Default</span>
             <div>
                  <Nav/>
                  <div  className="About-Style">
                     <div className="About-Intro-Style">
                          <h1>من نحن ؟</h1>
                          <p>
                          فكرة هذا الموقع جاءت من أزمة حقيقية تعرضا لها الشباب و المجتمع المدني في مدينة
                         المتلوي من ولاية قفصة في بدايات أنتشار فيروس كورونا في تونس و إقرار الحجر الصحي الشامل.
                         إحدا المشاكل تتمثل في صعوبة تواصل العديد من الشابات الخياطات المتطوعات في ما بين
                         هم و مع متطوعين اخرين بالمواد الأولية لخياطة كمامات و بدلات للإطار الطبي و توزيعها علي وحدات الجيش و الشرطة
                          و المستشفي الجهوي بالمتلوي. هذا الموقع هو رابط بين المتطوعين الذين يمكنهم التعاون معًا 
                         و كل المتدخلين في مشروع تطوعي وبهذا الموقع نساعد كل المتدخلين في المشروع علي ربح 
                         الوقت و المجهود في محولة التواصل  و تجميع المتطوع بالمجهود و المتبرع بالمواد الأولية.
                         </p>
                     </div>
                     <div className="About-Fields-Style">
                     {images.map(imagesItem => 
                     <div className='hover-button'>
                         <div  className="About-Fields-imgs-Style" style={{width: '200px', height: "150px", backgroundImage: `url(${imagesItem.imgesrc})`, backgroundSize: "cover"}} >
                        {/* <img src={imagesItem.imgesrc} alt={imagesItem.hover} className="About-Fields-imgs-Style" /> */}
                        <div className='hover-button--on'><p>{imagesItem.hover}</p></div>
                        </div>
                     </div>  )}
                     </div>
                  </div>
                  <Footer/>
             </div>
             )
}
export default AboutUs