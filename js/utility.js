
function showSectionById(id){
    // Hide All Section
    document.getElementById('main-page').classList.add('hidden')
    document.getElementById('history-page').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    

}
function showColorById(id){
    // Hide All Section
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')

    document.getElementById(id).classList.add('bg-[#B4F461]')
    

}
