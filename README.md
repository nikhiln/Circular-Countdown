Circular Count Down
=============
- only one function call requires to start count down
- uses canvas to display dials. Uses <a href="https://github.com/aterrien/jQuery-Knob">jQuery Knob</a> for generating dials.


Example
-------

    <input class="knob days" data-readOnly="true" data-width="150" data-displayPrevious=true data-fgColor="#66EE66" data-skin="tron" data-thickness=".2" data-min="0" data-max="365" value="75">
	
	<input class="knob hour" data-readOnly="true" data-width="150" data-min="0" data-max="24" data-displayPrevious=true data-fgColor="#800080" data-skin="tron" data-thickness=".2" value="75">
	
	<input class="knob minute" data-readOnly="true" data-width="150" data-min="0" data-max="60" data-displayPrevious=true data-fgColor="#ffec03" data-skin="tron" data-thickness=".2" value="75">
	
	<input class="knob second" data-readOnly="true" data-width="150" data-min="0" data-max="60" data-displayPrevious=true data-fgColor="#00CED1" data-skin="tron" data-thickness=".2" value="75">

    <script>
		$(".ccounter").ccountdown(2013,5,25); //only need to pass target date
    </script>

You can change the style of each dial. See documentation of <a href="https://github.com/aterrien/jQuery-Knob">jQuery Knob</a>


Set only target date
-------
	Pass the target year, month and day in the ccountdown function, rest of handled by circular countdown script.
    <script>
		e.g. year -> 2013, Month -> 5, Day -> 25
		$(".ccounter").ccountdown(2013,5,25);
    </script>

Supported browser
-------

Tested on Chrome, Safari, Firefox, IE 9.0.

MIT License
-------

Copyright (C) 2013 Nikhil Navadiya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.