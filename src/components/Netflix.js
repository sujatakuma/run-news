import './Netflix.css';

function Netflix() {
    return (
        <div>
            <div className="section">
                <nav className='header'>
                    <div id="logo">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" srcset="" />
                        <button className='sumbit'>sing up</button>
                        <select >
                            <option value="eng" >English</option>
                            <option value="hindi">hindi</option>
                        </select>
                    </div>
                    <div className='mein'>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>

                    </div>
                    <div className='sing-up'>
                        <input type="text" className='plece-holder' name='' placeholder='Email address ' />
                        <button className='start'>Get Started</button>
                    </div>
                </nav>
            
            </div>
            <menu>
                <div className='box'>
                    <div></div>    
                            <h2>Enjoy on your TV.</h2>
                            <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                        
                    </div>
                    </menu>
                    
        </div>

    );
}
export default Netflix;