import React from 'react'; 

function AngularComparison() { 
    return ( 
    <div> 
        <h2>React vs. Angular</h2> 
        <ul> 
            <li><b>Architecture:</b> React is a library focused on the view layer with component-based architecture. Angular is a complete framework with tools for routing, forms, HTTP client, and more.</li> 
            <li><b>Learning Curve:</b> React has a simpler API and is easier to learn. Angular has a steeper learning curve due to its complexity and use of TypeScript.</li> 
            <li><b>Data Binding:</b> React uses one-way data binding, making state management more predictable. Angular uses two-way data binding, which can automatically synchronize the model and view.</li> 
            <li><b>Performance:</b> React's virtual DOM improves performance by minimizing updates to the real DOM. Angular's real DOM can lead to performance bottlenecks in large applications.</li> 
            <li><b>Community and Ecosystem:</b> React, backed by Facebook, has a vast ecosystem and community. Angular, developed by Google, has a more monolithic ecosystem with built-in functionality.</li> 
            
        </ul> 
        
    </div> 
  ); 

} 

export default AngularComparison;