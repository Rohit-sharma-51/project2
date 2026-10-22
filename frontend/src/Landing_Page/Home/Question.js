import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div className="container my-5">
      <h3 className="text-center text-success fw-bold mb-4">
        Frequently Asked Questions
      </h3>

      <Accordion defaultActiveKey="0">

        {/* Question 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
           <span style={{color:"#219653"}}> What is KrishiConnect?</span>
          </Accordion.Header>
          <Accordion.Body>
            KrishiConnect is an online marketplace that connects farmers with buyers for secure and transparent contract farming. Our platform offers a comprehensive ecosystem for managing demand, signing contracts, monitoring crops, and ensuring payments.
          </Accordion.Body>
        </Accordion.Item>

        {/* Question 2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
           <span style={{color:"#219653"}}> How does KrishiConnect ensure secure contracts?</span>
          </Accordion.Header>
          <Accordion.Body>
            We use blockchain technology to secure contracts and payments, ensuring that all transactions are transparent and tamper-proof. This guarantees that both farmers and buyers can trust the integrity of their agreements.
          </Accordion.Body>
        </Accordion.Item>

        {/* Question 3 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
          <span style={{color:"#219653"}}> What support does KrishiConnect offer to farmers?</span>
          </Accordion.Header>
          <Accordion.Body>
            KrishiConnect offers multi-language and voice assistance, as well as integration with government crop insurance schemes. We also provide AI-powered insights to help farmers make informed decisions and improve crop management.
          </Accordion.Body>
        </Accordion.Item>

        {/* Question 4 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <span style={{color:"#219653"}}>  How can buyers ensure they receive quality produce?</span>

           
          </Accordion.Header>
          <Accordion.Body>
            Buyers can access detailed information about the farmers and the crops through our platform. We facilitate transparent contract agreements and provide tools for monitoring crop progress, ensuring that buyers receive high-quality produce.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default Faq;