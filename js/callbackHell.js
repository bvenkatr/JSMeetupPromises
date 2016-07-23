    var $div = document.getElementById('main');

    // function loadImage(url, callback) {
    //     var img = new Image();
    //     img.onload = function() {
    //         callback(null, img);
    //     }
    //     img.onerror = function(err) {
    //         callback(new Error('Failed to load Image'));
    //     }
    //     img.src = url;
    // }

    // // Callback Hell
    
    // loadImage('/images/bg.jpg', function(error, image) {
    //     if (error)
    //         return alert('Error Loading the bg image');

    //     $div.appendChild(image);

    //     loadImage('/images/music.jpg', function(error, image) {
    //         if (error)
    //             return alert('Error Loading the music image');

    //         $div.appendChild(image);

    //         loadImage('/images/js.png', function(error, image) {
    //             if (error)
    //                 return alert('Error Loading the js image');

    //             $div.appendChild(image);
    //         })
    //     })
    // })

/* -------------------------------------------  Promised Version ------------------------------------------ */
    
    // Promise Creation

    function loadImage(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function(err) {
                reject(new Error('Failed to load Image'));
            }
            img.src = url;
        })
    }

    // Promise usage or consumption

    // loadImage('/images/bg.jpg')
    //     .then(function(res){
    //         $div.appendChild(res);       
    //         return loadImage('/images/music.jpg');
    //     })
    //     .then(function(res){
    //         $div.appendChild(res);       
    //         return loadImage('/images/js.png');     
    //     })
    //     .then(function(res){
    //         $div.appendChild(res);                 
    //     })
    //     .catch(function(err){
    //         alert(err);
    //     })


Promise.race([
      loadImage('/images/bg.jpg'),
      loadImage('/images/musiic.jpg'),
      loadImage('/images/js.png'),
      Promise.reject('abc')
    ]).then(function(result){
        console.log(result);
    }).catch(function(err){
        alert(err)
    })





