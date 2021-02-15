
// dropdown algorithm

// buttons
const drop_btn = document.querySelector('.drop_btn')
const settings_btn =  document.querySelector('.settings_btn')
const settings_back =  document.querySelector('.settings_back_btn')
const help_back =  document.querySelector('.help_back_btn')
const help_btn =  document.querySelector('.help_btn')



// wrappers
const wrapper = document.querySelector('.wrapper')
const menu_bar = document.querySelector('.menu_bar')
const settings_bar = document.querySelector('.settings_bar')
const help_bar = document.querySelector('.help_bar')


drop_btn.onclick = showMenu
settings_btn.onclick = showSettings
settings_back.onclick = hideSettings
help_btn.onclick = showHelp
help_back.onclick = hideHelp


function showMenu(){
    wrapper.classList.toggle('show_bar');
    wrapper.style.height = 'auto'
    console.log('its working')
}

function showSettings(){
    menu_bar.style.marginLeft = '-400px';
    setTimeout(()=>{
        settings_bar.style.display = 'block';
        
    },100)
}

function showHelp(){
    menu_bar.style.marginLeft = '-400px';
   
    setTimeout(()=>{
        help_bar.style.display = 'block';
        
    },100)
    console.log("showhelp")
}

function hideSettings(){
    menu_bar.style.marginLeft = '0px';
    settings_bar.style.display = 'none';
}

function hideHelp(){
    menu_bar.style.marginLeft = '0px';
    help_bar.style.display = 'none';
}
