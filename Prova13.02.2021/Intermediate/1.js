class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    constructor ( url,size){
        this.url =url;
        this.size = new Size() ;
    }
    
    getUrl(){
        return this.url
    }
    
    setUrl(url){
        this.url = url;
        return this.url
    }

    getSize(){
        this.size.height = height;
        this.size.width = width;
        let object = { height, width};
        return object
    }

    setSize(width,height){
        this.size.height =height;
        this.size.width = width;
    }

    cloneImage(){
        let newSize = this.Image.getSize()
        return new Image(this.url,newSize)
    }
}