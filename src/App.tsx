import Page from "./components/Page.tsx";
import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Main from "./components/Main.tsx";
import Steps from "./components/Steps/Steps.tsx";
import Services from "./components/Services/Services.tsx";
import News from "./components/News/News.tsx";
import ExploreMore from "./components/ExploreMore/ExploreMore.tsx";
import FrequentTravelers from "./components/Frequent Travelers.tsx";
import Footer from "./components/Footer.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


function App (){
        return (
            <Page>
                <Header>
                    <Navigation/>
                    <Hero/>
                </Header>

                <Main>
                    <Steps/>
                    <Services/>
                    <News/>
                    <ExploreMore/>
                    <Testimonials/>
                    <FrequentTravelers/>
                    <Footer/>
                </Main>
            </Page>
        );

}

export default App;