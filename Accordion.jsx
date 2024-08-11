import React,{useState} from 'react'

 
const dataCollection = [
    {
        question: "What makes blockchain trustworthy?",
        answer: "Blockchain is trustworthy because it provides transparency, as all participants can view the transactions. It ensures security by making the data immutable, which means it cannot be altered once recorded. The decentralized nature of blockchain eliminates the need for intermediaries, reducing the risk of fraud. Lastly, consensus mechanisms ensure that all participants agree on the validity of transactions before they are added to the blockchain. "
    } , {
        question: "Why do you want to work in this company?" ,
        answer: "I want to work at this company because I am passionate about your mission and believe that my skills align well with the responsibilities of this role. I admire your company's commitment to innovation and am excited about the opportunity to contribute to your team's success. "
    } , {
        question: "What are your greatest strength?" ,
        answer: "One of my greatest strengths is my ability to adapt quickly to new challenges and environments, allowing me to stay productive even in unfamiliar situations. I also excel at communication, which helps me collaborate effectively with diverse teams. Additionally, my strong problem-solving skills enable me to find innovative solutions to complex issues. Finally, I am highly organized, which allows me to manage multiple tasks efficiently. "
    } , {
        question: "Can you explain why you changed your career path?" ,
        answer: "I changed my career path to pursue a role that aligns more closely with my passions and long-term goals. My previous experience provided valuable skills, but I realized that my true interests lie in this new field. The change has energized me and I am excited to bring my unique perspective to this industry. "
    }
];




function Accordion() {

    const [accordian, setAtiveAccordion] = useState(-1);
    
    function toggleAccordian(index){
        setActiveAccordion(index);
    }
  return (
   
     <>
        <div className="container">
            <div>
            
                <span className="accordion__title">
                    Frequently asked questions
                </span>
            
                <h1>
                    Lets answer some of your questions
                </h1>
            
            </div>


            <div className="accordion__faq">
                {dataCollection.map((item, index)=> (
                    <div key={index} onClick={()=> toggleAccordian(index) }>  

                        <div className="accordion__faq-heading">
                            <h3 className={accordion === index ? "active" : "" }> 
                                {item.question}
                            </h3>
                        </div>
                    
                        <div>

                            {accordion === index ? (<><span className="verticle">-</span></>) : (<><span className="verticle">+
                            </span></>)}
                            
                        </div>

                        <div>
                            <p className={accordion === index ? "active" : "inactive"}>{item.answer} </p>
                        </div>

                    </div>   
                ))}
            </div>

        </div>
    
    
     </>
  )
}

export default Accordion;