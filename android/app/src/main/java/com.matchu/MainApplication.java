package com.yourapp;

import com.imagepicker.ImagePickerPackage;

public class MainApplication extends Application implements ReactApplication {

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new ImagePickerPackage() 
    );
  }

}
