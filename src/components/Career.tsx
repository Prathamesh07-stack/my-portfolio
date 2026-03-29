import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance AI/Web3 Developer</h4>
                <h5>Rescape Technologies Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing a DeFi-enabled neobank wallet integrating Web3 wallets
              for secure crypto asset management and peer-to-peer transactions.
              Implementing staking pool features and smart contract interactions
              to enable seamless on-chain liquidity flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer I</h4>
                <h5>Rescape Technologies · Goa</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Actively developed Zelyo AI — an agentic AI assistant for automated
              Kubernetes cluster management. Automated infrastructure issue
              resolution using LLM-powered reasoning frameworks, reducing manual
              intervention time by 40%. Built scalable web and mobile interfaces
              for Zelyo AI across platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Rescape Technologies · Goa</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Applied SDLC principles with Linux, Git, Docker and Kubernetes in
              an agile environment. Configured local blockchain environments with
              Ganache and Truffle to test smart contract logic and decentralized
              data flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Persistent Systems Ltd · Goa</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed an AI chatbot using Python and NLP, automating 5+ routine
              support tasks for client systems. Managed chatbot integration with an
              e-commerce platform and implemented personalized recommendation
              engines based on user behavior analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
