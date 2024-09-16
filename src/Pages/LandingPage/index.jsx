import Header from "../../Components/Header";
import "./landingpage.css"
export const LandingPage = () => {
  return (
    <>
      <Header justify_content="justify-content-end" display="d-none" />
      <main>
        <div className="main-banner d-flex align-items-center justify-content-center flex-column">
                  <h1 className="text-white mb-5">What are you looking for?</h1>
          <div className="button-container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="row  flex-column">
                  <div className="col-md-4 my-3 sm-mt-5">
                    <a href="/home">
                      <button className="px-3   py-2  rounded-5">
                        Business Writing
                      </button>
                    </a>
                  </div>
                  <div className="col-md-4 my-3 sm-mt-5">
                    <a href="/home">
                      <button className="px-3  py-2  rounded-5">Content Writing</button>
                    </a>
                  </div>
                  <div className="col-md-4 my-3 sm-mt-5">
                    <a href="/home">
                      <button className="px-3  py-2  rounded-5">
                        Academic Writing
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
