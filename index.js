function update(txt){
    document.getElementById("countdown").innerText= txt;
}

function startcountdown(){
    update(10);
    setTimeout(()=>{

        update(9);
        setTimeout(()=>{

            update(8);
            setTimeout(()=>{

                update(7);
                setTimeout(()=>{

                    update(6);
                    setTimeout(()=>{

                        update(5);
                        setTimeout(()=>{

                            update(4);
                            setTimeout(()=>{

                                update(3);
                                setTimeout(()=>{

                                    update(2);
                                    setTimeout(()=>{

                                        update(1);
                                        setTimeout(()=>{

                                            update("HAPPY INDEPENCE DAY");
                                            setTimeout(()=>{

                                            
                                                },1000);
                                        
                                                
                                        
                                            },1000);
                                    
                                            
                                    
                                        },1000);
                                
                                        
                                
                                    },1000);
                            
                                    
                            
                                },1000);
                        
                                
                        
                            },1000);
                    
                            
                    
                        },1000);
                
                        
                
                    },1000);
            
                    
            
                },1000);
        
                
        
            },1000);
    
            
    
        },1000);
    
}

//startcountdown();