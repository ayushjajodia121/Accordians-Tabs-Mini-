let tabs=document.querySelectorAll(".tab");
tabs.forEach((current) => {
	current.onclick = (e) => {
		    //prevent deafult reloading
		    e.preventDefault();
		    //removing active class from all tabs containing active class
		    tabs.forEach((current)=>{
		    	if(current.classList.contains("active"))
		    	{
		    		current.classList.remove("active");
		    	}
		    })
		    // adding active class on tab that got clicked

		    current.classList.add("active");
		    
		    // getting id attribute's value in variable
		    
		    let id=current.getAttribute("id");
		    
		    // storing all con divs in a variable
	        
	        let cons=document.querySelectorAll(".con");
	        //checking if con contains active class or not

	        cons.forEach((current)=>{
	        	if(current.classList.contains("active"))
	        	{
	        		current.classList.remove("active");
	        	}

	        })

	        // if clicked tab's id and current con's data-relation is same we add active class
	        cons.forEach((current) =>{
		    if(current.getAttribute("data-relation") === id)
		    {
		    	current.classList.add("active");
		    }
	} )

	}
	
})