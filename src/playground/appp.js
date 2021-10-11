console.log('App.js is Running..');
//adding Title-----Render Template
//jsx -javascripts xml
var user ={
    name:'Lili',  //
    age:27,        //
    location:'India' //
};
function getLocation(location){
    if(location){
        return <p>Location:{location}</p>
    }
}
var templateTwo = (
    <div>
    <h1>{user.name ? user.name : Anonymous}</h1>
    {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
    </div>
)
const app = {
    title: 'Indecision App',
    subtitle: 'Put ypor life in the hands of a Computer',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value =  ' ';
        render();
    }
};
const onRemoveAll = () => {
    app.options = [];
    render();
}

 const appRoot = document.getElementById('app');

 const render = () => {
    const template = (                                           //forms 
            <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your Options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {app.options.map((option) => <li key= {option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
             <input type = 'text' name = 'option' />
             <button>Add Option</button>
            </form>
            </div>
            );
       ReactDom.render(template, appRoot);
 };

 render();


