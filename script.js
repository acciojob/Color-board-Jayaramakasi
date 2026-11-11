//your JS code here. If required.

        const container=document.querySelector(".container")
        const fragment=document.createDocumentFragment()

        for(let i=0;i<800;i++){
            const div=document.createElement("div")
            div.classList.add("square")

            div.addEventListener("mouseenter",(e)=>{

                const red=Math.floor(Math.random()*256)
                const green=Math.floor(Math.random()*256)
                const blue=Math.floor(Math.random()*256)

                e.target.style.boxShadow="1px 1px 1px gray" 
                e.target.style.backgroundColor=`rgb(${red},${green},${blue})`
				// setTimeout((e)=>{
				// 	e.target.style.backgroundColor="rgb(55,53,53)"
				// },1000)
    //         })
            })

            div.addEventListener("mouseout",(e)=>{
                setTimeout(()=>{
                    e.target.style.backgroundColor="rgb(55,53,53)"
					e.target.style.transition="1s ease"
                    e.target.style.boxShadow="1px 1px 1px" 
                }, 1000)
            })

            fragment.appendChild(div)

        }
        container.appendChild(fragment)

