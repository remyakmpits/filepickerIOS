import { Component } from '@angular/core';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Plugins, Capacitor } from '@capacitor/core';
//import 'capacitor-file-selector'

const { FileSelector } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private filePicker: IOSFilePicker, private imagePicker: ImagePicker) {




  }
  uploadDoc() {
    this.filePicker.pickFile()
      .then(uri => console.log(uri))
      .catch(err => console.log('Error', err));

  }
  uploadFromCameraRoll() {

    this.imagePicker.getPictures({ width: 200 }).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  async uploadFile(){

    let multiple_selection = false;
    const that = this;
    //let ext = [".jpg",".png",".pdf",".jpeg"] // list of extensions
    let ext = ['MP4', 'mp4', 'mov']; // combination of extensions or category
    //let ext = ["videos", "audios", "images"] // list of all category
    //let ext = ["*"] // Allow any file type
    ext = ext.map((v) => v.toLowerCase());
    let selectedFile = await FileSelector.fileSelector({
      multiple_selection: multiple_selection,
      ext: ext,
    });

     console.log(selectedFile)

  }

}
