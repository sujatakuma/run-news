import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
        render() {


                return (

                        <div className="container my-3">
                                <h1> This is a news</h1>
                                <div className="row">
                                        <div className="col-md-4">
                                                <NewItem title="mytitle" description="hello this is a new news" imgurl="https://s.yimg.com/ny/api/res/1.2/HkFTOcCcNaeaQ62QNSXieg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/1987d5a0-eaeb-11ed-af39-f7fda1d77f66" />

                                        </div>
                                        <div className="col-md-4">
                                                <NewItem title="mytitle" description="hello this is a new news" />
                                        </div>
                                        <div className="col-md-4">
                                                <NewItem title="mytitle" description="hello this is a new news" />
                                        </div>

                                </div>
                        </div>
                )
        }

}
export default News