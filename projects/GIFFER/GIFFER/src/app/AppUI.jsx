import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { ListOfGifs } from '../components/listOfGifs/ListoOfGifs';
import { LoadingGif } from '../components/loading/LoadingGif'


function AppUI (){    
    return(
        <div className='app'>
            <Navbar/>
                <h1>{anime}</h1>
            <div className='app-gif-content'>
                {loadingState &&
                    <>
                    <LoadingGif/>
                    <LoadingGif/>
                    <LoadingGif/>                    
                    </>

                }

                {!loadingState &&
                    <ListOfGifs/>
                }
                
            </div>
        
            <Footer/>
        </div>
    )
}

export {AppUI}