$(document).ready(function{
  console.log("ready");
  var wellingtonSampleData = 
  {"vectorQuery": {"layers": {"2219": {"crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "field_names": ["Open_hours", "Disabled", "Suburb", "Location", "Type", "Change_room"], "type": "FeatureCollection", "features": [{"geometry": {"type": "Point", "coordinates": [174.77418326567965, -41.262058948175991]}, "distance": 783, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Wadestown", "Location": "Wadestown Road- Wadestown", "Type": "Unisex", "Change_room": "No"}, "id": 173}, {"geometry": {"type": "Point", "coordinates": [174.77307497770201, -41.249981064717467]}, "distance": 795, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Ngaio", "Location": "Collingwood Street - Ngaio", "Type": "Unisex", "Change_room": "No"}, "id": 174}, {"geometry": {"type": "Point", "coordinates": [174.75786186888402, -41.267815443710127]}, "distance": 1567, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Wilton", "Location": "Otari Wiltons Bush - Information Centre", "Type": "Unisex", "Change_room": "No"}, "id": 194}, {"geometry": {"type": "Point", "coordinates": [174.75537609037423, -41.266496605536211]}, "distance": 1589, "type": "Feature", "properties": {"Open_hours": " ", "Disabled": "Yes", "Suburb": "Wilton", "Location": "Otari Wilton's Bush - Picnic Area Toilets", "Type": "Unisex", "Change_room": "No"}, "id": 210}, {"geometry": {"type": "Point", "coordinates": [174.79127322793934, -41.246720772821476]}, "distance": 2171, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Khandallah", "Location": "Ganges Road - Khandallah", "Type": "Unisex", "Change_room": "No"}, "id": 175}, {"geometry": {"type": "Point", "coordinates": [174.78869615975444, -41.241995940247577]}, "distance": 2311, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Khandallah", "Location": "Woodmancote Street - Khandallah", "Type": "Unisex", "Change_room": "No"}, "id": 176}, {"geometry": {"type": "Point", "coordinates": [174.77701516545287, -41.27884009944755]}, "distance": 2594, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Pipitea", "Location": "Bowen St - between Terrace & Lambton Qyay - City", "Type": "Unisex", "Change_room": "No"}, "id": 147}, {"geometry": {"type": "Point", "coordinates": [174.76914249779719, -41.281024999547881]}, "distance": 2742, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Kelburn", "Location": "Botanic Gardens - Rose Garden", "Type": "M&F", "Change_room": "No"}, "id": 183}, {"geometry": {"type": "Point", "coordinates": [174.76930658916629, -41.281049314079084]}, "distance": 2745, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Kelburn", "Location": "Botanic Gardens - Begonia House", "Type": "Unisex", "Change_room": "No"}, "id": 182}, {"geometry": {"type": "Point", "coordinates": [174.76579128466545, -41.281637142437603]}, "distance": 2820, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Kelburn", "Location": "Botanic Gardens - Main Garden Founders Entrance", "Type": "Unisex", "Change_room": "No"}, "id": 188}, {"geometry": {"type": "Point", "coordinates": [174.76614866162018, -41.282172169342729]}, "distance": 2877, "type": "Feature", "properties": {"Open_hours": "9.00am - 4.00pm", "Disabled": "Yes", "Suburb": "Kelburn", "Location": "Botanic Gardens - Treehouse", "Type": "M&F", "Change_room": "No"}, "id": 189}, {"geometry": {"type": "Point", "coordinates": [174.75045307884631, -41.279452120708456]}, "distance": 2989, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Karori", "Location": "Karori Cemetery - Karori", "Type": "M&F", "Change_room": "No"}, "id": 170}, {"geometry": {"type": "Point", "coordinates": [174.76567815152001, -41.283555559924942]}, "distance": 3034, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Kelburn", "Location": "Botanic Gardens - Play Area", "Type": "M&F", "Change_room": "No"}, "id": 184}, {"geometry": {"type": "Point", "coordinates": [174.75824201792273, -41.282899889440912]}, "distance": 3078, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Northland", "Location": "Randwick Rd - Northland", "Type": "Unisex", "Change_room": "No"}, "id": 172}, {"geometry": {"type": "Point", "coordinates": [174.77579382778845, -41.285113753019047]}, "distance": 3250, "type": "Feature", "properties": {"Open_hours": "Mon - Thurs: 7.30am - 6.00pm, Fri: 7.30am - 7.00pm, Sat: 8.00am - 4.00pm, Sun: 10.00am - 4.00pm, 1 cubicle 24 hours", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "ANZ - Lambton Quay & Featherston St Corner - City", "Type": "Unisex", "Change_room": "No"}, "id": 148}, {"geometry": {"type": "Point", "coordinates": [174.76753645744273, -41.285643580705056]}, "distance": 3256, "type": "Feature", "properties": {"Open_hours": "6.00am - 10.00pm", "Disabled": "Yes", "Suburb": "Kelburn", "Location": "Skyline Site -Top of Cable Car - Kelburn", "Type": "Unisex", "Change_room": "No"}, "id": 168}, {"geometry": {"type": "Point", "coordinates": [174.77660067625575, -41.288031152341794]}, "distance": 3581, "type": "Feature", "properties": {"Open_hours": "During Library opening hours", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "Central Library - Wakefield Street - City", "Type": "M&F", "Change_room": "No"}, "id": 191}, {"geometry": {"type": "Point", "coordinates": [174.77775892814256, -41.288606624857614]}, "distance": 3663, "type": "Feature", "properties": {"Open_hours": "6.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "Civic Square Conveniences - City", "Type": "Unisex", "Change_room": "No"}, "id": 187}, {"geometry": {"type": "Point", "coordinates": [174.77701834945125, -41.289029339260864]}, "distance": 3697, "type": "Feature", "properties": {"Open_hours": "During Council admin building opening hours", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "Wellington City Council - Wakefield St - City", "Type": "M&F", "Change_room": "No"}, "id": 193}, {"geometry": {"type": "Point", "coordinates": [174.77748459752866, -41.291901842113027]}, "distance": 4017, "type": "Feature", "properties": {"Open_hours": "Mon - Thurs: 7.30am - 6.00pm, Fri: 7.30am - 7.00pm", "Disabled": "Yes", "Suburb": "Te Aro", "Location": "Te Aro Park - Dixon Street - City", "Type": "Unisex", "Change_room": "No"}, "id": 146}, {"geometry": {"type": "Point", "coordinates": [174.78517348720936, -41.290969532401633]}, "distance": 4085, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "Herd Street", "Type": "M&F", "Change_room": "No"}, "id": 208}, {"geometry": {"type": "Point", "coordinates": [174.73767315353362, -41.284803795420615]}, "distance": 4095, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Karori", "Location": "Next to Karori Library - Karori", "Type": "Unisex", "Change_room": "No"}, "id": 169}, {"geometry": {"type": "Point", "coordinates": [174.7900678389361, -41.290586936781722]}, "distance": 4203, "type": "Feature", "properties": {"Open_hours": "Winter: 7.00am - 7.00pm Summer 7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Oriental Bay", "Location": "Freyberg Beach - Oriental Bay", "Type": "Unisex", "Change_room": "Yes"}, "id": 186}, {"geometry": {"type": "Point", "coordinates": [174.78590504864681, -41.291909620726493]}, "distance": 4205, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm (Winter), 6.00am - 10.00pm (Summer)", "Disabled": "Yes", "Suburb": "Wellington Central", "Location": "Waitangi Pk Kiosk Toilets", "Type": "Unisex", "Change_room": "No"}, "id": 205}, {"geometry": {"type": "Point", "coordinates": [174.76802993353851, -41.295306784040648]}, "distance": 4328, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Aro Valley", "Location": "Aro Street Park - Aro Valley", "Type": "Unisex", "Change_room": "No"}, "id": 167}, {"geometry": {"type": "Point", "coordinates": [174.78290026826747, -41.293995429460985]}, "distance": 4347, "type": "Feature", "properties": {"Open_hours": "3 cubicles & Urinal Rm 24 hours, 3 Cubicles 7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Te Aro", "Location": "Courtenay Place - Cambridge Terrace end - City", "Type": "Unisex", "Change_room": "No"}, "id": 145}, {"geometry": {"type": "Point", "coordinates": [174.79283691774384, -41.291505011198979]}, "distance": 4397, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Oriental Bay", "Location": "Wishing Well Gardens - Oriental Parade", "Type": "Unisex", "Change_room": "No"}, "id": 144}, {"geometry": {"type": "Point", "coordinates": [174.79502173696321, -41.290999197058397]}, "distance": 4435, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Oriental Bay", "Location": "Oriental Bay Band Rotunda -Oriental Bay", "Type": "Unisex", "Change_room": "No"}, "id": 185}, {"geometry": {"type": "Point", "coordinates": [174.8068416235572, -41.224844323025771]}, "distance": 4737, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Johnsonville", "Location": "Next to Johnsonville Library - Johnsonville", "Type": "Unisex", "Change_room": "No"}, "id": 177}, {"geometry": {"type": "Point", "coordinates": [174.76802788747338, -41.300052975318607]}, "distance": 4855, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Brooklyn", "Location": "Central Park - Brooklyn", "Type": "Unisex", "Change_room": "No"}, "id": 165}, {"geometry": {"type": "Point", "coordinates": [174.80274771533183, -41.292111876976492]}, "distance": 4890, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Roseneath", "Location": "Evans Bay Parade - Balaena Bay", "Type": "M&F", "Change_room": "Yes"}, "id": 149}, {"geometry": {"type": "Point", "coordinates": [174.72490581211304, -41.286935185445337]}, "distance": 5003, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Karori", "Location": "Karori Park", "Type": "Unisex", "Change_room": "No"}, "id": 213}, {"geometry": {"type": "Point", "coordinates": [174.79283780957573, -41.298067264475741]}, "distance": 5055, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Mt Victoria", "Location": "Alexandra Road - Mt Victoria", "Type": "Unisex", "Change_room": "No"}, "id": 206}, {"geometry": {"type": "Point", "coordinates": [174.76533312205848, -41.304727241927438]}, "distance": 5382, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Brooklyn", "Location": "Jefferson St - Brooklyn", "Type": "Unisex", "Change_room": "No"}, "id": 166}, {"geometry": {"type": "Point", "coordinates": [174.81356803433016, -41.220196121504145]}, "distance": 5499, "type": "Feature", "properties": {"Open_hours": "Open with Park bookings", "Disabled": "No", "Suburb": "Paparangi", "Location": "Helston Park - Helston Rd", "Type": "Unisex", "Change_room": "No"}, "id": 197}, {"geometry": {"type": "Point", "coordinates": [174.79327480773676, -41.304420075731407]}, "distance": 5722, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Hataitai", "Location": "Taurima Street - Hataitai", "Type": "Unisex", "Change_room": "No"}, "id": 151}, {"geometry": {"type": "Point", "coordinates": [174.70290547721612, -41.270218199319004]}, "distance": 5728, "type": "Feature", "properties": {"Open_hours": "Winter: 7.30am - 4.30pm, Summer: 7.30am - 9.00pm", "Disabled": "No", "Suburb": "Makara", "Location": "Makara Cemetery - South Makara Road", "Type": "Unisex", "Change_room": "No"}, "id": 207}, {"geometry": {"type": "Point", "coordinates": [174.8229293152072, -41.223347859362363]}, "distance": 5837, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Newlands", "Location": "Newlands Mall - McMillan Court - Newlands", "Type": "M&F", "Change_room": "No"}, "id": 181}, {"geometry": {"type": "Point", "coordinates": [174.70290327315544, -41.274558525072756]}, "distance": 5876, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Makara", "Location": "Makara Cemetery 2 - South Makara Road", "Type": "Unisex", "Change_room": "No"}, "id": 211}, {"geometry": {"type": "Point", "coordinates": [174.72204057197635, -41.297286201090941]}, "distance": 5999, "type": "Feature", "properties": {"Open_hours": "7.00am - 10.00pm", "Disabled": "Yes", "Suburb": "Karori", "Location": "Makara Peak Mountain Bike Carpark - Karori", "Type": "Unisex", "Change_room": "No"}, "id": 196}, {"geometry": {"type": "Point", "coordinates": [174.79921036348455, -41.305977804986696]}, "distance": 6076, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Hataitai", "Location": "Evans Bay Parade - Hataitai Beach", "Type": "M&F", "Change_room": "Yes"}, "id": 150}, {"geometry": {"type": "Point", "coordinates": [174.71335123834655, -41.22013142521029]}, "distance": 6142, "type": "Feature", "properties": {"Open_hours": "Winter: 7.00am - 6.00pm, Summer: 7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Makara Beach", "Location": "Makara Beach - Makara", "Type": "Unisex", "Change_room": "Yes"}, "id": 171}, {"geometry": {"type": "Point", "coordinates": [174.78026680569209, -41.313430627670662]}, "distance": 6414, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Newtown", "Location": "Constable Street/Riddiford Street Corner - Newtown", "Type": "Unisex", "Change_room": "No"}, "id": 159}, {"geometry": {"type": "Point", "coordinates": [174.79780814649368, -41.311209872034581]}, "distance": 6563, "type": "Feature", "properties": {"Open_hours": "8.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Hataitai", "Location": "Evans Bay Marina - Boatshed", "Type": "Unisex", "Change_room": "No"}, "id": 195}, {"geometry": {"type": "Point", "coordinates": [174.79312578696008, -41.314331829089561]}, "distance": 6757, "type": "Feature", "properties": {"Open_hours": "Open with Park bookings", "Disabled": "Yes", "Suburb": "Kilbirnie", "Location": "Kilbirnie Park - Kilbirnie Crescent", "Type": "Unisex", "Change_room": "Yes"}, "id": 198}, {"geometry": {"type": "Point", "coordinates": [174.83261207561409, -41.297294105616665]}, "distance": 7024, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm, Changing rooms closed 1 June - 31 August", "Disabled": "Yes (toilets only)", "Suburb": "Karaka Bays", "Location": "Scorching Bay Beach Pavillion - Scorching Bay", "Type": "Unisex", "Change_room": "Yes"}, "id": 192}, {"geometry": {"type": "Point", "coordinates": [174.77579721934484, -41.319950265323584]}, "distance": 7090, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Berhampore", "Location": "Luxford Street - Berhampore", "Type": "Unisex", "Change_room": "No"}, "id": 163}, {"geometry": {"type": "Point", "coordinates": [174.78237476473478, -41.319766440287296]}, "distance": 7137, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Newtown", "Location": "Newtown Park", "Type": "Unisex", "Change_room": "Yes"}, "id": 212}, {"geometry": {"type": "Point", "coordinates": [174.79446344987991, -41.319021032681462]}, "distance": 7288, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Kilbirnie", "Location": "Bay Road - Kilbirnie", "Type": "Unisex", "Change_room": "No"}, "id": 152}, {"geometry": {"type": "Point", "coordinates": [174.76330147980636, -41.323791085524185]}, "distance": 7505, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Kingston", "Location": "Quebec St - Kingston", "Type": "M&F", "Change_room": "No"}, "id": 164}, {"geometry": {"type": "Point", "coordinates": [174.8237744929358, -41.309993858816263]}, "distance": 7535, "type": "Feature", "properties": {"Open_hours": "Open with Park bookings", "Disabled": "No", "Suburb": "Miramar", "Location": "Miramar Park", "Type": "M&F", "Change_room": "No"}, "id": 200}, {"geometry": {"type": "Point", "coordinates": [174.77455034418759, -41.325003714600768]}, "distance": 7642, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Berhampore", "Location": "Berhampore Public Golf Course - Berhampore", "Type": "M&F", "Change_room": "No"}, "id": 202}, {"geometry": {"type": "Point", "coordinates": [174.81751327147924, -41.315696473516553]}, "distance": 7756, "type": "Feature", "properties": {"Open_hours": "Open with Park bookings", "Disabled": "No", "Suburb": "Miramar", "Location": "Polo Ground", "Type": "M&F", "Change_room": "No"}, "id": 201}, {"geometry": {"type": "Point", "coordinates": [174.81643236073486, -41.316202621731343]}, "distance": 7757, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Miramar", "Location": "Miramar Avenue/Park Road Intersection - Miramar", "Type": "Unisex", "Change_room": "No"}, "id": 155}, {"geometry": {"type": "Point", "coordinates": [174.8280882632784, -41.313530973966252]}, "distance": 8067, "type": "Feature", "properties": {"Open_hours": "24 hours, changing rooms closed 1 June - 31 August", "Disabled": "Yes", "Suburb": "Seatoun", "Location": "Worser Bay Beach Pavilion - Marine Parade", "Type": "Unisex", "Change_room": "Yes"}, "id": 204}, {"geometry": {"type": "Point", "coordinates": [174.82994218881473, -41.312541307982798]}, "distance": 8078, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Seatoun", "Location": "Worser Bay - beach side opp. bottom of Awa Road", "Type": "Unisex", "Change_room": "No"}, "id": 154}, {"geometry": {"type": "Point", "coordinates": [174.7941700161962, -41.329973349412292]}, "distance": 8451, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm, Changing rooms closed 1 June - 31 August", "Disabled": "Yes (toilets only)", "Suburb": "Lyall Bay", "Location": "Lyall Bay Surf Club - Lyall Bay", "Type": "Unisex", "Change_room": "Yes"}, "id": 153}, {"geometry": {"type": "Point", "coordinates": [174.79187142075952, -41.331479215159419]}, "distance": 8567, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "No", "Suburb": "Lyall Bay", "Location": "Queens Drive - Lyall Bay", "Type": "M&F", "Change_room": "No"}, "id": 143}, {"geometry": {"type": "Point", "coordinates": [174.82063024988329, -41.324393472361599]}, "distance": 8719, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Miramar", "Location": "Broadway/Ira Street Corner - Strathmore", "Type": "Unisex", "Change_room": "No"}, "id": 158}, {"geometry": {"type": "Point", "coordinates": [174.77315805420491, -41.334883969016616]}, "distance": 8731, "type": "Feature", "properties": {"Open_hours": "7.00am - 10.00pm", "Disabled": "Yes", "Suburb": "Island Bay", "Location": "Medway Street - Island Bay", "Type": "Unisex", "Change_room": "No"}, "id": 162}, {"geometry": {"type": "Point", "coordinates": [174.83052715138524, -41.322499972050146]}, "distance": 8988, "type": "Feature", "properties": {"Open_hours": "24 Hours", "Disabled": "Yes", "Suburb": "Seatoun", "Location": "Dundas Street - Seatoun", "Type": "Unisex", "Change_room": "No"}, "id": 156}, {"geometry": {"type": "Point", "coordinates": [174.83400091105207, -41.322030794457476]}, "distance": 9117, "type": "Feature", "properties": {"Open_hours": "Mon - Wed: 24 Hours, Thu - Sun: 7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Seatoun", "Location": "Churchill Park - Seatoun Beach", "Type": "Unisex", "Change_room": "Yes"}, "id": 157}, {"geometry": {"type": "Point", "coordinates": [174.82707957010123, -41.184340947646049]}, "distance": 9374, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm", "Disabled": "No", "Suburb": "Tawa", "Location": "Willowbank Reserve - Boscobel Lane - Tawa", "Type": "M&F", "Change_room": "No"}, "id": 178}, {"geometry": {"type": "Point", "coordinates": [174.83455583270685, -41.325497758929998]}, "distance": 9455, "type": "Feature", "properties": {"Open_hours": "24 Hours, Changing rooms open with Park bookings", "Disabled": "Yes", "Suburb": "Seatoun", "Location": "Seatoun Park - Hector St", "Type": "Unisex", "Change_room": "Yes"}, "id": 203}, {"geometry": {"type": "Point", "coordinates": [174.77357727416836, -41.343157540232667]}, "distance": 9651, "type": "Feature", "properties": {"Open_hours": "7.00am - 9.00pm Summer During Daylight Savings, Closed Winter", "Disabled": "No", "Suburb": "Island Bay", "Location": "Island Bay Surf Club - Island Bay", "Type": "M&F", "Change_room": "Yes"}, "id": 190}, {"geometry": {"type": "Point", "coordinates": [174.77083243482744, -41.343216741955949]}, "distance": 9651, "type": "Feature", "properties": {"Open_hours": "1 cubicle 24 hours, 1 cubicle 7.00am - 9.00pm", "Disabled": "Yes", "Suburb": "Island Bay", "Location": "Shorland Park - Island Bay", "Type": "Unisex", "Change_room": "No"}, "id": 161}, {"geometry": {"type": "Point", "coordinates": [174.78878850731718, -41.345087259139888]}, "distance": 9999, "type": "Feature", "properties": {"Open_hours": "Winter: 7.00am - 7.00pm, Summer: 7.00am - 9.00pm", "Disabled": "No", "Suburb": "Houghton Bay", "Location": "Princess Bay - The Esplanade", "Type": "M&F", "Change_room": "Yes"}, "id": 160}]}}}}
  var myApp = angular.module('spicyApp1', [
    'ngResource'
  ]);

  // $(document).ready(function(){
  //   $("#rate_button").on("click", function(event) {
  //     console.log("login");
  //     Hull.login("facebook");
  //   });
  //   
  //   
  // });

  myApp.controller('PeeCtrl', ['$scope', '$location', '$resource', function($scope, $location, $resource){
    //TODO make this come from a server resource (cross domain fu on file:// resource hell)
    //var toiletResource = $resource('static/wellington.json');
    //$scope.toilets = toiletResource.get();

    var userLocation = null;
    var markers = [];
    $scope.locationData = wellingtonSampleData.vectorQuery.layers['2219'];

    // Fix geometry
    $.map( $scope.locationData.features, function fixGeometry(feature) {
      var longLat = feature.geometry.coordinates;
      feature.geometry.coordinates = {
        'lng': longLat[0],
        'lat': longLat[1]
      };
    });

    $scope.fiveRandoms = $scope.locationData.features.slice(0,5);
    $scope.firstRandom  = $scope.fiveRandoms[0];

    var centerMap = $scope.firstRandom.geometry.coordinates;

    // create a map in the "map" div, set the view to a given place and zoom
    //var map = L.map('map').setView([ centerMap[1],centerMap[0] ], 13);
    var map = L.map('map').setView(centerMap, 13);
    window.map = map;

    // add an OpenStreetMap tile layer http://{s}.tile.osm.org/{z}/{x}/{y}.png
    L.tileLayer('http://a.tiles.mapbox.com/v3/michaeldowse.helo0de5/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var coolMarker = L.AwesomeMarkers.icon({
        icon: '',
        prefix: 'fa',
        markerColor: 'blue',
        iconColor: 'white'
      });


    angular.forEach( $scope.locationData.features, function dropMarker(datum) {
      if ( datum && datum.geometry && datum.geometry.coordinates ) {
        var seed   = new Date().getTime()
        var rating = Math.floor( Math.random( seed ) * 5 ) + 1; // 1 to 5
        var marker = L.marker(datum.geometry.coordinates, {icon: coolMarker}).addTo(map);
        markers.push( marker );



        var stars;
        switch(rating) {
          case 1 : stars = 'S <span class="grey">S S S S</span>';     break;
          case 2 : stars = 'S S <span class="grey">S S S</span>';    break;
          case 3 : stars = 'S S S <span class="grey">S S</span>';   break;
          case 4 : stars = 'S S S S <span class="grey">S</span>';  break;
          case 5 : stars = 'S S S S S'; break;
        }

        // FIXME this should be templated
        var bubbleContent = '';
        bubbleContent += '<h2>' + datum.properties.Location + '</h2>';
        // bubbleContent += '<p><span class="icon">' + stars + '</span></p>';
        // bubbleContent += '<a href="#" id="rate_button">Rate this</a>';
        bubbleContent += '<p><strong>Opening Hours</strong><br />';
        bubbleContent += datum.properties.Open_hours + '</p>';

        marker.bindPopup( bubbleContent );

        window.loo = datum.properties;
      }
    });

    navigator.geolocation.getCurrentPosition( function setCenter(gps){
      userLocation = {
        "lat": gps.coords.latitude,
        "lng": gps.coords.longitude
      };
      // map.setView(userLocation, 15);

      var personMarker = L.AwesomeMarkers.icon({
        icon: 'male',
        prefix: 'fa',
        markerColor: 'orange',
        iconColor: 'white'
      });
      L.marker(userLocation, {icon: personMarker}).addTo(map);

      // Find closest loo
      var minDistance = 99999;
      var closestMarker = markers[0];

      angular.forEach( markers, function calculateDistance(thisMarker) {
        var thisPopup = thisMarker.getPopup();
        var howFar = thisMarker.getLatLng().distanceTo( userLocation );
        minDistance = Math.min( minDistance, howFar );

        thisPopup.setContent(
          thisPopup.getContent() + '<p class="distance"><strong>Distance</strong><br />' + Math.round(howFar) + ' metres away</p>'
        );

        if ( minDistance === howFar ) {
          closestMarker = thisMarker;
        }
      });

      closestMarker.getPopup().setContent(
        closestMarker.getPopup().getContent()
      );
      console.log(closestMarker.getLatLng());
      console.log(userLocation);
      map.fitBounds([closestMarker.getLatLng(), userLocation], {"padding": [100,100]} );
      closestMarker.openPopup();
    });
  }]);

  // hack hack, div needs to take up the whole page ;-)
  $('#map').css({
    'height': $(document).height()
  });
});


