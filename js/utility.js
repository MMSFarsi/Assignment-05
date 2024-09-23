
function showSectionById(id){
    // Hide All Section
    document.getElementById('main-page').classList.add('hidden')
    document.getElementById('history-page').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    

}
