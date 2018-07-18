
let pixelCanvas = $('#pixel_canvas');
let heightInput = $('#input_height');
let widthInput = $('#input_width');
let heightCanvas = heightInput.val();
let widthCanvas = widthInput.val();
let colorPicker = $('#colorPicker');
let valueColor = colorPicker.val();
let submitInput = $('#input_submit');
let resetColor = $('#input_reset');
let bgInput = $('#input_background');
let headerColorInput = $('#input_header');
let reloadInput = $('#input_reload');
let titleInput = $('#input_title');
let printInput = $('#input_print');
let canvasColorInput = $('#input_canvas');
let cellInput = $('#input_cell');

/**
* @description Make a grid
* @param {number} row - the row of table
* @param {number} col - the column of table
* @returns {object} Table
*/
function makeGrid(row, col) {
    pixelCanvas.empty();
    for (let x=0; x<row; x++){
        let tr = ('<tr></tr>');
        pixelCanvas.append(tr);
        for (let y=0; y<col; y++){
           let cell = ('<td></td>');
           let td = pixelCanvas.children('tr').last();
           td.append(cell);
        }
    }
};

// Value of color in color picker
$(colorPicker).on('change', function(){valueColor = $(this).val();});

/**
* @description Choose and change color on table cells and other elements on page
* @param {}
* @param {}
* @returns {} New color for cell when click cell and for other elements when click aproppriate button
*/
function chooseColor(){
	
	// Change color a clicked cell
	$('table tr td').click(function(){
        $(this).css('background-color', valueColor);
    });
	
	// Change color all cells
    $(canvasColorInput).click(function(){
        $('table tr td').css('background-color', valueColor);
    });
	
	// Reset color all cells
    $(resetColor).click(function(){
        $('table tr td').css('background-color', '#fff');
    });
	
	// Change a background color
	$(bgInput).click(function(){
        $('body').css('background-color', valueColor);
    });
	
	// Change a h1 color
	$(headerColorInput).click(function(){
        $('h1').css('color', valueColor);
    });
	
	// Change a cell border color
	$(cellInput).click(function(){
        $('table tr td').css('border-color', valueColor);
    });
    
	// Change a cell color with onclick mouse button and moving mouse
   $('td').mousedown(function(event){
        if(event.buttons){
            $(this).css('background-color', valueColor);
        }
    });
    $('td').mouseover(function(event){
        if(event.buttons){
            $(this).css('background-color', valueColor);
        }
    });
};

/**
* @description Change text in element h1
* @param {}
* @param {}
* @returns {} New text in h1
*/
function changeTitle(){
    titleInput = $('#title').val();
    $('h1').text(titleInput);
};

/**
* @description Print page
* @param {}
* @param {}
* @returns {} Opened panel to print page
*/
function printProject(){
    $('#input_print').click(function(){
        window.print();
    });
};

// Make a grid 
heightInput.on('change', function(){heightCanvas = $(this).val();});

widthInput.on('change', function(){widthCanvas = $(this).val();});

submitInput.on('click', function(){
    makeGrid(heightCanvas, widthCanvas);
    chooseColor();
});

// Change text in h1
titleInput.on('click', function(){changeTitle();});

// Open panel to print
printInput.on('click', function(){printProject();});

// Reload page
reloadInput.on('click', function(){location.reload();});
