/*
  Imaginary Teleprompter
  Copyright (C) 2019 Imaginary Sense Inc.

  This file is part of Imaginary Teleprompter.

  Imaginary Teleprompter is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Imaginary Teleprompter is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with Imaginary Teleprompter.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

// Import Teleprompter's CKEditor Implementation
import CKEditorImplementation from './ckeditor-implementation';
// Imaginary Teleprompter Plugins Import
import Playback from './plugins/playback';
import Mirror from './plugins/mirror';

class ImaginaryTeleprompter {
  constructor() {
    console.log("Starting Imaginary Teleprompter");

    let teleprompterSettings = {
      plugins: [
        Mirror,
        Playback,
      ]
    };

    this.instance = new CKEditorImplementation( teleprompterSettings );
  }
}
new ImaginaryTeleprompter;
