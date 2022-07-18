let span=document.querySelectorAll(".accord-head span");
span.forEach((current) =>{
	current.onclick=(e) =>{
		if(e.target.parentElement.nextElementSibling.classList.contains("open")){
			 e.target.parentElement.nextElementSibling.style.display="none";
		    e.target.classList.add("fa-plus-circle");
		    e.target.classList.remove("fa-minus-circle");
		    e.target.parentElement.nextElementSibling.classList.remove("open");

		}
		else{

			let body=document.querySelectorAll(".accord-body");
			body.forEach((current) => {
				if(current.classList.contains("open")){
					current.classList.remove("open");
					current.previousElementSibling.children[1].classList.add("fa-plus-circle");

					current.previousElementSibling.children[1].classList.remove("fa-minus-circle");
					current.style.display="none";

				}

			})

		    e.target.parentElement.nextElementSibling.style.display="block";
		    e.target.classList.remove("fa-plus-circle");
		    e.target.classList.add("fa-minus-circle");
		    e.target.parentElement.nextElementSibling.classList.add("open");
	    }

	}
})