//const { render } = require("react-dom");

//import React;
class ReactCoures extends React.Component {
  constructor(props){
    super(props);
    this.handleRequirements = this.handleRequirements.bind(this);
    this.state = {
        visibility : false
    };
  }
    handleRequirements(){
      this.setState((prevState) => {
          return{
              visibility : !prevState.visibility
          };
        });
     }

     handlePick1 () {
     alert('Setting Up Environment......Installing Visual Studio Code, Node js, Yarn');
     render();
     }
     handlePick2() {
      alert('Hello React');
      render();
     }
     
     handlePick3() {
      alert('Setting Up Babel');
      render();
     }
    handlePick4() {
      alert('Exploring JSX');
      render();
     }
  
     handlePick5() {
      alert('JSX Expressions');
      render();
     }
    
    render() {
      const title = 'React Course';
      const subtitle = 'Welcome to the React World..... Here is All course Contents';
  
      return (
        <div>
          <Header title={title}
           subtitle={subtitle} />
           
      <div>
      <h2>Course Chapters :</h2>
      <button onClick={this.handlePick1} type="button"
      style={{ backgroundColor: 'pink' }}>chapter 1</button>
      <button onClick={this.handlePick2}>chapter 2</button>
      <button onClick={this.handlePick3}>chapter 3</button>
      <button onClick={this.handlePick4}>chapter 4</button>
      <button onClick={this.handlePick5}>chapter 5</button>

      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Chapter 1</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Setting up Environment for React Project</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Chapter 2</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello React</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
      </div>
      <h2><p>Some Softwares are Required for React Course.</p><p>So please Click On Requirements.</p></h2>
      <button onClick={this.handleRequirements}>
        {this.state.visibility ? 'Hide details' : 'Requirements'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Text Editor, Node Js, Install Yarn</p>
              
          </div> 
      )}
        </div>
      );
           
    }
  }

  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  
  ReactDOM.render(<ReactCoures />, document.getElementById('app'));

  

  