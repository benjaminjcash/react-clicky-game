import React, { Component } from 'react';
import Container from "./components/Container";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar"
import images from "./images.json";

class App extends Component {

  state = {
    images: images,
    score: 0,
    highscore: 0
  }

  //Fisher-Yates (aka Knuth) Shuffle algorithm from Stack Overflow.
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  clickEvent = (id) => {
    // Returns shuffled images array.
    const updatedImages = this.shuffle(this.state.images);


    updatedImages.forEach((image) => {
      // For the clicked image, check if images has been clicked.
      // If not, increases score by 1 and updates "clicked" to true.
      // If so, updates highscore (if necessary) and starts game over.
      if(image.id === id) {
        if(image.clicked === false) {
          image.clicked = true;
          this.setState({
            images: updatedImages,
            score: this.state.score + 1
          });
        } else if(image.clicked === true) {
          alert("You have already clicked that image!");
          updatedImages.forEach((image) => {
            image.clicked = false
          })
          if(this.state.highscore < this.state.score) {
            this.setState({
              images: updatedImages,
              score: 0,
              highscore: this.state.score,              
            });
          } else {
            this.setState({
              images: updatedImages,
              score: 0
            });
          }
        }
      }
    })

  }

  // Renders components.
  render() {
    return [
        <Navbar 
          score={this.state.score}
          highscore={this.state.highscore}
        />,
        <Container>
          {
            images.map(image => {
              return (
              <ImageCard
                key={image.id}
                id={image.id}
                image={image.link}
                click={this.clickEvent}
                alt={image.name}
              />
            )
            })
          }
        </Container>
    ];
  }
}

export default App;
