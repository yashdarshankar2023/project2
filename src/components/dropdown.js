import React from "react"
import { useState } from "react"
import "../styles/Dropdown.css"
function Dropdown() {
    const [selected , setSelected] = useState(null);


   const toggle = (i) => {
        if( selected === i){
            return setSelected(null);
        }

        setSelected(i);
    }
    return (
       <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
        <h1 className="head"> Common Car services Questions in delhi</h1>
        <div className="wrapper">
        <div className="accordian">
        
        {data.map((items , i) =>(

            <div className="item"  onClick={() => toggle(i)}> 
            <div className="title">
            <h4>{items.question}</h4>
            <span>{selected === i ? '-' : '+'}</span>
             </div>
            <div className={selected === i ? 'content-show' : 'content'}>
                {items.answer}
            </div>
            </div>

        ))}
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

    )
}

const data = [
    {
        question:"What services does Helpy Moto offer for cars in Delhi?",
        answer:"Helpy Moto offers a range of car services in Delhi, including regular car servicing, car detailing, car cleaning, car denting and painting, battery replacement, and car AC repair."
    } ,
    {
        question:"How can I book a car service with Helpy Moto in Delhi?",
        answer:"You can book a car service with Helpy Moto in Delhi by calling their customer service number, booking online through their website or mobile app"
    },
    {
        question:"How much does Helpy Moto charge for a car service in Delhi?",
        answer:"The cost of a car service with Helpy Moto in Delhi varies depending on the type of service you require and the make and model of your car. You can get a price estimate by calling their customer service number or checking their website or mobile app."
    },
    {
        question:"Does Helpy Moto offer doorstep car services in Delhi?",
        answer:"Yes, Helpy Moto offers doorstep car services in Delhi. You can request for a pickup and drop-off service for your car or have their technicians come to your location to service your car."
    },
    {
        question:"How much does Helpy Moto charge for a car service in Delhi?",
        answer:"The cost of a car service with Helpy Moto in Delhi varies depending on the type of service you require and the make and model of your car. You can get a price estimate by calling their customer service number or checking their website or mobile app."
    },
    {
        question:"How long does a car service with Helpy Moto take in Delhi?",
        answer:"The duration of a car service with Helpy Moto in Delhi depends on the type of service you require and the condition of your car. Typically, a regular car service takes around 2-3 hours."
    },
    {
        question:"What is the process of a car service with Helpy Moto in Delhi?",
        answer:"The process of a car service with Helpy Moto in Delhi includes a thorough inspection of your car, replacement of worn-out parts and fluids, cleaning and detailing, and testing of your car to ensure it is in good working condition."
    },
    {
        question:"What kind of car parts and oils does Helpy Moto use in Delhi?",
        answer:"Helpy Moto uses genuine car parts and high-quality oils and fluids in Delhi. They have tie-ups with reputed brands like Mobil, Castrol, and Bosch.        "
    },
    {
        question:"Does Helpy Moto offer any discounts or packages for car services in Delhi?",
        answer:"Yes, Helpy Moto offers various discounts and packages for car services in Delhi. You can check their website or mobile app to know about the latest offers and promotions."
    },
    {
        question:"Are there any additional charges for Helpy Moto car services in Delhi?",
        answer:"The cost of a car service with Helpy Moto in Delhi includes all the necessary charges like labor, parts, oils, and taxes. However, there might be additional charges for extra services or repairs that are not included in the standard service package."
    },
    {
        question:"What precautions is Helpy Moto taking during the pandemic in Delhi for car services?",
        answer:"These are some common questions that people may have about car services provided by Helpy Moto in Delhi. If you have any other specific questions, feel free to ask Helpy Moto follows all the necessary precautions and safety measures during the pandemic in Delhi. Their technicians wear masks, gloves, and sanitizes the car before and after the service. They also encourage customers to maintain social distancing and avoid physical contact during the service."
    }
]



export default Dropdown