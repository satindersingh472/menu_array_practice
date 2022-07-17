let menu_items = [
    `https://images.unsplash.com/photo-1657299141998-2aba7e9bdebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80`,
    `https://images.unsplash.com/photo-1657915255369-979d2339884b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
    `https://images.unsplash.com/photo-1657977197667-12a0555dfef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    `https://images.unsplash.com/photo-1657664065994-5e257c88b7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80`,
    `https://images.unsplash.com/photo-1654036249671-134ea63bc3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    `https://images.unsplash.com/photo-1657963087977-cf2283e1b0cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    `https://images.unsplash.com/photo-1657969956287-fc849f62e99c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    `https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80`,
    `https://images.unsplash.com/photo-1657818795488-7942b45b04b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80`,
    `https://images.unsplash.com/photo-1657811763824-8f42e2d5c657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`
];

function put_images(details){
    details[`target`]
}

 let menu = document.getElementById(`unique_id`);
 let counter =0;
 for(counter= 0; counter < menu_items.length; counter++){
    menu.insertAdjacentHTML(`beforeEnd`, `<img src ="${menu_items[counter]}"/>`);
 }

