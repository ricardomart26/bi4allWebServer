var main_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("form")
var infos = main_sheet.getRange("B2:B7").getValues()
var rooms_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("rooms")
var info_rooms = rooms_sheet.getDataRange().getValues()

function generate_data_array()
{
	var data_array = []
	data_array.concat(infos[0])
	var date = infos[1]
	var start = infos[2].toString()
	var end = infos[3].toString()
	
	date = new Date(date.toString());
	var ano = date.getFullYear();
	var hour_start = start.split(":",2);
	var hour_end = end.split(":", 2);
	var mes = date.getMonth();
	var dia = date.getDate();
    var inicio = new Date(ano, mes, dia, hour_start[0], hour_start[1]);
    var fim = new Date(ano, mes, dia, hour_end[0], hour_end[1]);
	data_array.concat(inicio);
	data_array.concat(fim);
	data_array.concat(infos[4]);
	data_array.concat(infos[5]);
    return (data_array);
}

function agendar()
{
	var data_array = generate_data_array()

	if (parseFloat(data_array[4]) == 0)
	{
	var room = check_better_room(data_array, info_rooms)
	Logger.log(room)
	if (room == false)
		Logger.log("olha não rolou")
	else
	{
		data_array[4] = room
		create_event(data_array)
	}
	}
	else
	{
	Logger.log(data_array)
	if (check_availability(data_array))
		create_event(data_array);
	else
		Logger.log("olha não rolou")
	}
}

function doPost(e)
{
  //receber a resposta do forms na pagina html
	var content = JSON.parse(e.postData.contents)


	main_sheet.getRange("A1:B1").setValue(JSON.parse(e.postData.contents))
	return ContentService.createTextOutput(); // Avisar pagina que esta tudo bem
}
