import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <br/>
      <br/>
    <div className="Total-foot">
    
      <div className="All-part">
        <ul>
          <li>Fərdi müştərilər</li>
          </ul>
          <ul>
          <li>Biznes müştərilər</li>
          </ul>
          <ul>
          <li>Bank haqqında</li></ul>
          
          <ul><li>Digər</li></ul>
          
          <ul><li>Insan resursları</li></ul>
          <ul> <li>Baş ofis</li> </ul>
    
        </div>

           <div className="Full-parts">
           
           <div className="First-part">
          <a href="">
          <ul> <li> Kartmane </li></ul>   
          </a>
          <a href="">
            <ul> <li>Kreditlər</li></ul>
          </a>
          <a href="">
            <ul> <li>Əmanətlər</li> </ul>
          </a>
          <a href="">
            <ul> <li>Onlayn xidmətlər</li></ul>
          </a>
          <a href="">
            <ul> <li>Kampaniyalar</li> </ul>
          </a>
        </div>
        <div className="Second-part">
         
         <a href="">
          <ul> <li>Əmanətlər</li> </ul>
          </a>
          <a href="">
            <ul><li>Kreditlər</li></ul>
          </a>
          <a href="">
            <ul><li>Plastik kartlar</li></ul>
          </a>
          <a href="">
            <ul><li>Bank xidmətləri</li></ul>
          </a>
          <a href="">
            <ul><li>Kampaniyalar</li> </ul>
          </a>

         </div>
        
         <div className="Three-part">
          
          <a href="">
            <ul> <li>Ümumi məlumat</li> </ul>
          </a>
          <a href="">
            <ul> <li>Strateji baxış və missiya</li> </ul>
          </a>
          <a href="">
            <ul> <li>Rəhbərlik</li> </ul>
          </a>
          <a href="">
            <ul> <li>Təşkilati struktur</li></ul>
          </a>
          <a href="">
            <ul> <li>Banklararası biznes</li> </ul>
          </a>
          <a href="">
            <ul> <li>Risklərin idarə edilməsi</li> </ul>
          </a>
        </div> 
        <div className="Four-part">
         
         <a href="">
           <ul> <li>Yükləmələr və dəstək</li> </ul>
         </a>
         <a href="">
           <ul> <li>Tender elanları</li> </ul>
         </a>
         <a href="">
           <ul> <li>Hesabatlar</li> </ul>
         </a>
         <a href="">
           <ul><li>Şikayət və təkliflər</li></ul>
         </a>
         <a href="">
           <ul><li>F.A.Q</li></ul>
         </a>
       </div> 
       <div className="Five-part">
      
      <a href="">
        <ul><li>Ümumi məlumat</li></ul>
      </a>
      <a href="">
        <ul><li className="vakansiya">Vakansiyalar</li></ul>
      </a>
    </div> 

    <div className="Six-part">
          <ul>
            <li>Azərbaycan, Bakı şəh.,</li>
            <li>AZ 1010, 28 May küç. 33</li>
            <li>Tel.: (994 12) 598 44 88</li>
            <li>Fax.: (994 12) 598 44 88</li>
            <li>Teleks: 142453 RSKBAI</li>
            <li>133@rabitabank.com</li>
          </ul>
        </div> 
      
        <div className="App">
        <img className="App-store" src="https://www.rabitabank.com/images/svg-icons/apple_1.svg"/>
        <img className="Google-play" src="https://www.rabitabank.com/images/svg-icons/google.svg"/>
        <img className="App-gallery"src="https://www.rabitabank.com/images/svg-icons/appgallery.svg"/>
       </div>
       <div className="Icons">
         <p className="Watch">Bizi izləyin</p>
      <img className="Facebook" src="data:image/png;base64,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" />
      <img className="Twitter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAZlBMVEUAAAD////Y2NhAQED4+Pjz8/O6urqAgICYmJg1NTULCwvq6urDw8P7+/vJyclYWFhgYGBvb28gICDg4OCIiIhmZmYnJyeoqKgsLCxNTU2enp55eXlISEhSUlLPz8+urq4WFhaQkJBi1D2AAAADNklEQVRoge2b2baCIBRAQVEznHIsrbT//8mbem1EgYPJC/uhF5G9QobDURAecVzP3qOfs7c91/lXouGX7H5vfbIjT7Xlb2lGyLcmdbCtuCcY1db2ZoSsXk02bu0Rn9zVm/awJzuMHD1mdBe7utQu8nSpPWTrUttog9mTjTaxwWAwGAwGLfhJXrtuncfltt6ysaZtHKbB5f1i+kvz7uEdiV72FXYACD1vgjFjQfEnYTFdu2J8ljaXhBxFylVf4p7mfuVSObDtZH7f8Qu4A6YZ41007qMJIN6OsIjbnTE/uMmb0dB1nMtyoZxnhuysyvC9wzA58szXoSrJNj9Pd+cLheYe9ER0LxO3JJFTXx73z3dRn2Nu4+oayicuTs8a6FyDtbz2Hghl+7gdvtxdM4vsLSH1QdKMEHm9PWM9Lp/M2dTM6GN6dL/zPSe26w2yOEJm+HyQpOo+SiR882w3WeTwXZH7XlHBNQOzRKnDqCu7vbR7zFVHMPXc9JzVRTcWsLlqaILqMlujk7VNci7TjKdugWrOqkRoxh1cFVR9ZD1tKeBpUEYnlwOWEbT7FctTVMcgdYed9lAWSm0eCgV33/RSQkNu/QtA885iy9IiGVDNDnKlgI4t5e4NWi8H9sqjmsjvO/5RbnEKNSNbKAhZQOHtRq2ohj7qHrXxRYETyoD/vX2VABonjDAjFVFU2rsnApupciLDgzY6e9sgxT7nxkFMlDNJ8dn3Tzngn6u/FrewA5tZwJPoA+gissa3ALAHjVWmkwn+FoMFOAB/Q2z//o76mB65yqtVJ7KJUnoVWae5ByTdtFtPLbdyh+pD+pW0FQ/IJbNkfLomEJtOIUlRLmnq8SfVFRYsFrkusy8wwH9i3ouE5UupXCgnbsr9jnNa31sL9e2VvlxLx/k/PRd54AgNaWetQdXVWQ8VDoajFb9mSmQm7mytpeqfQlROm3XFPYnIBiBa+R9PpNVy585++m1i4s5EhjTI1wj+Funs3LXoc/52aGZVB3uzF9XHc5w0XtM0SWwfu62sBoPBYDAYtKLxg3yNxxA0Hr7QeORE40EbjceLdB6q0niUTOcBOp3HBnUelsRajoj+AYX1I31NP2uDAAAAAElFTkSuQmCC"/>
      <img className="Instagram" src="data:image/png;base64,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"/>
      <img className="Youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOsD_Jm_KUHpV7Ne5gL8peYktnh-QI9m7yQ&usqp=CAU"/>
      <img className="Linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD////CwsJOTk6ysrL4+PhFRUXY2Nj09PS6urqYmJiBgYFBQUELCws0NDTFxcXS0tJVVVVra2sUFBQ6OjqKiopwcHCjo6MgICDu7u7n5+dcXFx4eHguLi7MzMzf399bVa6cAAACRUlEQVRoge3b2XaCMBAG4AQMewXZVKT6/m9ZFZVloiYeM9OL+S96UTh+GgIkgRFySBSn2Y9wnp8sjaMbKa5/VeJeHZOokQ7XmLIQ6/BO57jwJflAh/iyEOGFVsitPWStzjRqDxuTSBHRyOIMx1R0LFIqOhUZFZ0JhKunPmQw5x+lbpttWtb4cFsM91RVbHDhXSHHoN5SAyWn2ePd2nZzWcquwqILuQxWm7dAlvKAQ8MfjfWz6+WRHgauGNG1t5QoZ3ejpVEGFFst3WDQqZbuMehSS/sYNGEP157XHg69oWpvMcwC51khyULsFzLiVHTdzeVfPFpU0zbHa+0hhzvuYfWwaTZp01O4HA6H80hQ9mlfbj687Nf+MtNZdgW2+o8pmb/qbnPjfZF8sjR1BPfr6bKeDwcSwbClDOf/PtpPl7yXQwVIqytdh2CDLGwXJT6iEwhfsnVPw0HVLXYjHGs6045ibznZdHZruo6fy3a2LR3pp2mPHM1XQ23ptzHva1+nzddDvk93dLTx9NwBvaejZemULpq27FeRfqPhLPkjOr/fKRrt0oByR0/6UXXS7RC4oudrW51mD7M+bk8vnhDWml3MrmjWdLQcEazefrtv0aD7Bgb7fIduwUfAo+2Ihmu3cOjghlbwxIEHm2mmmWaaaaaZZppppplmmmmmKejXr0k8f+zykjZ7bSzJvXny6fJPffSWgQ9XGvARRC/AcziEIXwhn7AMgbD4grDkhLDQhrC8iLKoirCUjLKAjrJskLJYUpKUiP4B8nIf+HRw/g4AAAAASUVORK5CYII="/>
   
       </div>
       </div>
       </div>
       
       <div className="Last">
        <div className="Finally">
         <p className="Last-part">Rabitəbank ASC Azərbaycan Mərkəzi Bankın 136 saylı lisenziyası<br/>
          əsasında fəaliyyət göstərir. © Rabitəbank 2024</p>
          <div className="Info-finance"> 
         <img className="Info-bank" src="https://www.rabitabank.com/images/infobank.png"/>
        < img className="Finance"src="https://www.rabitabank.com/images/maliyye-portali.png"/>
        </div> 
        </div>
       </div>
       


       </div>

    
  );
};

export default Footer;
