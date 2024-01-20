import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';
import { gamemodes } from 'src/app/models/enums/gamemodes';
import { questionmodes } from 'src/app/models/enums/questionmodes';
import { GameSettings } from 'src/app/models/gamesettings';
import { Questionobject } from 'src/app/models/questionobject';
import { GamelevelService } from '../gameplay/gamelevel.service';

// capitalLevel => 1 | 2 | 3
const ELEMENT_DATA: Country[] = [
  {name: 'Abchasien', capital: 'Sochumi', capitalLevel: 3, citizens: 240000, areasquarekm: 8600, citizenspersquarekm: 27.9, flag: 'assets/Flag_of_the_Republic_of_Abkhazia.svg', flagLevel: 3},
  {name: 'Afghanistan', capital: 'Kabul', capitalLevel: 2, citizens: 35500000, areasquarekm: 652230, citizenspersquarekm: 54.4, flag: 'assets/afghanistan.svg', flagLevel: 2},
  {name: 'Ägypten', capital: 'Kairo', capitalLevel: 1, citizens: 93400000, areasquarekm: 1001450, citizenspersquarekm: 93.3, flag: 'assets/Flag_of_Egypt.svg', flagLevel: 2},
  {name: 'Albanien', capital: 'Tirana', capitalLevel: 2, citizens: 2900000, areasquarekm: 28748, citizenspersquarekm: 101, flag: 'assets/Flag_of_Albania.svg', flagLevel: 2},
  {name: 'Algerien', capital: 'Algier', capitalLevel: 1, citizens: 42200000, areasquarekm: 2381741, citizenspersquarekm: 17.7, flag: 'assets/Flag_of_Algeria.svg', flagLevel: 2},
  {name: 'Andorra', capital: 'Andorra la Vella', capitalLevel: 2, citizens: 80000, areasquarekm: 468, citizenspersquarekm: 182, flag: 'assets/Flag_of_Andorra.svg', flagLevel: 2},
  {name: 'Angola', capital: 'Luanda', capitalLevel: 2, citizens: 28600000, areasquarekm: 1246700, citizenspersquarekm: 22.9, flag: 'assets/Flag_of_Angola.svg', flagLevel: 2},
  {name: 'Antigua und Barbuda', capital: 'Saint John’s', capitalLevel: 3, citizens: 100000, areasquarekm: 443, citizenspersquarekm: 226, flag: 'assets/Flag_of_Antigua_and_Barbuda.svg', flagLevel: 3},
  {name: 'Äquatorialguinea', capital: 'Malabo', capitalLevel: 3, citizens: 1300000, areasquarekm: 28051, citizenspersquarekm: 46.3, flag: 'assets/Flag_of_Equatorial_Guinea.svg', flagLevel: 3},
  {name: 'Argentinien', capital: 'Buenos Aires', capitalLevel: 1, citizens: 44300000, areasquarekm: 2780400, citizenspersquarekm: 15.9, flag: 'assets/Flag_of_Argentina.svg', flagLevel: 1},
  {name: 'Armenien', capital: 'Jerewan', capitalLevel: 2, citizens: 3000000, areasquarekm: 29743, citizenspersquarekm: 101, flag: 'assets/Flag_of_Armenia.svg', flagLevel: 2},
  {name: 'Republik Arzach', capital: 'Stepanakert', capitalLevel: 3, citizens: 135000, areasquarekm: 11500, citizenspersquarekm: 11.7, flag: 'assets/Flag_of_Artsakh.svg', flagLevel: 3},
  {name: 'Aserbaidschan mit Arzach', capital: 'Baku', capitalLevel: 2, citizens: 9900000, areasquarekm: 86600, citizenspersquarekm: 114, flag: 'assets/Flag_of_Azerbaijan.svg', flagLevel: 2},
  {name: 'Äthiopien', capital: 'Addis Abeba', capitalLevel: 1, citizens: 105000000, areasquarekm: 1104300, citizenspersquarekm: 95.1, flag: 'assets/Flag_of_Ethiopia.svg', flagLevel: 2},
  {name: 'Australien', capital: 'Canberra', capitalAnswers: ['Melbourne','Sydney'], capitalLevel: 1, citizens: 24500000, areasquarekm: 7741220, citizenspersquarekm: 3.16, flag: 'assets/Flag_of_Australia_(converted).svg', flagLevel: 1},
  {name: 'Bahamas', capital: 'Nassau', capitalLevel: 1, citizens: 400000, areasquarekm: 13880, citizenspersquarekm: 28.8, flag: 'assets/Flag_of_the_Bahamas.svg', flagLevel: 2},
  {name: 'Bahrain', capital: 'Manama', capitalLevel: 2, citizens: 1500000, areasquarekm: 760, citizenspersquarekm: 1970, flag: 'assets/Flag_of_Bahrain.svg', flagLevel: 2},
  {name: 'Bangladesch', capital: 'Dhaka', capitalLevel: 2, citizens: 164700000, areasquarekm: 143998, citizenspersquarekm: 1140, flag: 'assets/Flag_of_Bangladesh.svg', flagLevel: 2},
  {name: 'Barbados', capital: 'Bridgetown', capitalLevel: 2, citizens: 300000, areasquarekm: 430, citizenspersquarekm: 698, flag: 'assets/Flag_of_Barbados.svg', flagLevel: 3},
  {name: 'Belarus', capital: 'Minsk', capitalLevel: 1, citizens: 9500000, areasquarekm: 207600, citizenspersquarekm: 45.8, flag: 'assets/Flag_of_Belarus.svg', flagLevel: 2},
  {name: 'Belgien', capital: 'Brüssel', capitalLevel: 1, citizens: 11300000, areasquarekm: 30528, citizenspersquarekm: 367, flag: 'assets/Flag_of_Belgium_(civil).svg', flagLevel: 1},
  {name: 'Belize', capital: 'Belmopan', capitalLevel: 2, citizens: 400000, areasquarekm: 22966, citizenspersquarekm: 17.4, flag: 'assets/Flag_of_Belize.svg', flagLevel: 2},
  {name: 'Benin', capital: 'Porto-Novo', capitalLevel: 3, citizens: 11200000, areasquarekm: 112622, citizenspersquarekm: 99.4, flag: 'assets/Flag_of_Benin.svg', flagLevel: 3},
  {name: 'Bhutan', capital: 'Thimphu', capitalLevel: 3, citizens: 800000, areasquarekm: 38394, citizenspersquarekm: 20.8, flag: 'assets/Flag_of_Bhutan.svg', flagLevel: 3},
  {name: 'Bolivien', capital: 'Sucre', capitalLevel: 2, citizens: 11100000, areasquarekm: 1098581, citizenspersquarekm: 10.1, flag: 'assets/Flag_of_Bolivia.svg', flagLevel: 2},
  {name: 'Bosnien und Herzegowina', capital: 'Sarajevo', capitalLevel: 2, citizens: 3500000, areasquarekm: 51197, citizenspersquarekm: 68.4, flag: 'assets/Flag_of_Bosnia_and_Herzegovina.svg', flagLevel: 2},
  {name: 'Botswana', capital: 'Gaborone', capitalLevel: 2, citizens: 2300000, areasquarekm: 581730, citizenspersquarekm: 3.95, flag: 'assets/Flag_of_Botswana.svg', flagLevel: 3},
  {name: 'Brasilien', capital: 'Brasília', capitalAnswers: ['São Paulo','Rio de Janeiro'], capitalLevel: 2, citizens: 207900000, areasquarekm: 8514877, citizenspersquarekm: 24.4, flag: 'assets/Flag_of_Brazil.svg', flagLevel: 1},
  {name: 'Brunei', capital: 'Bandar Seri Begawan', capitalLevel: 3, citizens: 400000, areasquarekm: 5765, citizenspersquarekm: 69.4, flag: 'assets/Flag_of_Brunei.svg', flagLevel: 3},
  {name: 'Bulgarien', capital: 'Sofia', capitalAnswers: ['Belgrad'], capitalLevel: 2, citizens: 7100000, areasquarekm: 110879, citizenspersquarekm: 64, flag: 'assets/Flag_of_Bulgaria.svg', flagLevel: 2},
  {name: 'Burkina Faso', capital: 'Ouagadougou', capitalLevel: 3, citizens: 19600000, areasquarekm: 274200, citizenspersquarekm: 71.5, flag: 'assets/Flag_of_Burkina_Faso.svg', flagLevel: 3},
  {name: 'Burundi', capital: 'Gitega', capitalLevel: 2, citizens: 10400000, areasquarekm: 27830, citizenspersquarekm: 410, flag: 'assets/Flag_of_Burundi.svg', flagLevel: 3},
  {name: 'Chile', capital: 'Santiago de Chile', capitalLevel: 1, citizens: 18400000, areasquarekm: 756102, citizenspersquarekm: 24.3, flag: 'assets/Flag_of_Chile.svg', flagLevel: 1},
  {name: 'Republik China(Taiwan)', capital: 'Taipeh', capitalLevel: 1, citizens: 23600000, areasquarekm: 35980, citizenspersquarekm: 656, flag: 'assets/Flag_of_the_Republic_of_China.svg', flagLevel: 2},
  {name: 'Volksrepublik China', capital: 'Peking', capitalAnswers: ['Shanghai','Hongkong'], capitalLevel: 1, citizens: 1386800000, areasquarekm: 9596961, citizenspersquarekm: 148, flag: 'assets/Flag_of_the_Peoples_Republic_of_China.svg', flagLevel: 1},
  {name: 'Cookinseln', capital: 'Avarua', capitalLevel: 2, citizens: 11500, areasquarekm: 236, citizenspersquarekm: 48.7, flag: 'assets/Flag_of_the_Cook_Islands.svg', flagLevel: 3},
  {name: 'Costa Rica', capital: 'San José', capitalLevel: 1, citizens: 4900000, areasquarekm: 51100, citizenspersquarekm: 95.9, flag: 'assets/Flag_of_Costa_Rica.svg', flagLevel: 1},
  {name: 'Dänemark', capital: 'Kopenhagen', capitalLevel: 1, citizens: 5748769, areasquarekm: 43094, citizenspersquarekm: 128.0, flag: 'assets/Flag_of_Denmark.svg', flagLevel: 1},
  {name: 'Deutschland', capital: 'Berlin', capitalLevel: 1, citizens: 83100000, areasquarekm: 357121, citizenspersquarekm: 233, flag: 'assets/Flag_of_Germany.svg', flagLevel: 1},
  {name: 'Dominica', capital: 'Roseau', capitalLevel: 3, citizens: 73000, areasquarekm: 751, citizenspersquarekm: 97.2, flag: 'assets/Flag_of_Dominica.svg', flagLevel: 3},
  {name: 'Dominikanische Republik', capital: 'Santo Domingo', capitalLevel: 1, citizens: 10700000, areasquarekm: 48.670, citizenspersquarekm: 220, flag: 'assets/Flag_of_the_Dominican_Republic.svg', flagLevel: 2},
  {name: 'Dschibuti', capital: 'Dschibuti', capitalLevel: 2, citizens: 1000000, areasquarekm: 23200, citizenspersquarekm: 43.1, flag: 'assets/Flag_of_Djibouti.svg', flagLevel: 3},
  {name: 'Ecuador', capital: 'Quito', capitalLevel: 1, citizens: 16800000, areasquarekm: 283561, citizenspersquarekm: 59.2, flag: 'assets/Flag_of_Ecuador.svg', flagLevel: 2},
  {name: 'El Salvador', capital: 'San Salvador', capitalLevel: 2, citizens: 6400000, areasquarekm: 21041, citizenspersquarekm: 304, flag: 'assets/Flag_of_El_Salvador.svg', flagLevel: 2},
  {name: 'Elfenbeinküste', capital: 'Yamoussoukro', capitalLevel: 2, citizens: 24400000, areasquarekm: 322463, citizenspersquarekm: 75.7, flag: 'assets/Flag_of_Côte_dIvoire.svg', flagLevel: 2},
  {name: 'Eritrea', capital: 'Asmara', capitalLevel: 2, citizens: 5900000, areasquarekm: 117600, citizenspersquarekm: 50.2, flag: 'assets/Flag_of_Eritrea.svg', flagLevel: 3},
  {name: 'Estland', capital: 'Tallinn', capitalLevel: 2, citizens: 1300000, areasquarekm: 45228, citizenspersquarekm: 28.7, flag: 'assets/Flag_of_Estonia.svg', flagLevel: 2},
  {name: 'Eswatini', capital: 'Mbabane', capitalLevel: 3, citizens: 1400000, areasquarekm: 17364, citizenspersquarekm: 80.6, flag: 'assets/Flag_of_Eswatini.svg', flagLevel: 3},
  {name: 'Fidschi', capital: 'Suva', capitalLevel: 3, citizens: 900000, areasquarekm: 18274, citizenspersquarekm: 49.3, flag: 'assets/Flag_of_Fiji.svg', flagLevel: 3},
  {name: 'Finnland', capital: 'Helsinki', capitalLevel: 1, citizens: 5500000, areasquarekm: 338145, citizenspersquarekm: 16.3, flag: 'assets/Flag_of_Finland.svg', flagLevel: 1},
  {name: 'Frankreich', capital: 'Paris', capitalLevel: 1, citizens: 65000000, areasquarekm: 551500, citizenspersquarekm: 118, flag: 'assets/Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg', flagLevel: 1},
  {name: 'Gabun', capital: 'Libreville', capitalLevel: 2, citizens: 2000000, areasquarekm: 267667, citizenspersquarekm: 7.47, flag: 'assets/Flag_of_Gabon.svg', flagLevel: 3},
  {name: 'Gambia', capital: 'Banjul', capitalLevel: 2, citizens: 2100000, areasquarekm: 11295, citizenspersquarekm: 186, flag: 'assets/Flag_of_The_Gambia.svg', flagLevel: 3},
  {name: 'Georgien', capital: 'Tiflis', capitalLevel: 2, citizens: 3900000, areasquarekm: 69700, citizenspersquarekm: 56, flag: 'assets/Flag_of_Georgia.svg', flagLevel: 2},
  {name: 'Ghana', capital: 'Accra', capitalLevel: 2, citizens: 28800000, areasquarekm: 238533, citizenspersquarekm: 121, flag: 'assets/Flag_of_Ghana.svg', flagLevel: 2},
  {name: 'Grenada', capital: 'St. George’s', capitalLevel: 2, citizens: 108000, areasquarekm: 344, citizenspersquarekm: 314, flag: 'assets/Flag_of_Grenada.svg', flagLevel: 3},
  {name: 'Griechenland', capital: 'Athen', capitalLevel: 1, citizens: 10700000, areasquarekm: 131957, citizenspersquarekm: 81.1, flag: 'assets/Flag_of_Greece.svg', flagLevel: 1},
  {name: 'Guatemala', capital: 'Guatemala-Stadt', capitalLevel: 1, citizens: 16900000, areasquarekm: 108889, citizenspersquarekm: 155, flag: 'assets/Flag_of_Guatemala.svg', flagLevel: 2},
  {name: 'Guinea', capital: 'Conakry', capitalLevel: 2, citizens: 11500000, areasquarekm: 245857, citizenspersquarekm: 46.8, flag: 'assets/Flag_of_Guinea.svg', flagLevel: 3},
  {name: 'Guinea-Bissau', capital: 'Bissau', capitalLevel: 2, citizens: 1900000, areasquarekm: 36125, citizenspersquarekm: 52.6, flag: 'assets/Flag_of_Guinea-Bissau.svg', flagLevel: 3},
  {name: 'Guyana', capital: 'Georgetown', capitalLevel: 2, citizens: 800000, areasquarekm: 214969, citizenspersquarekm: 3.72, flag: 'assets/Flag_of_Guyana.svg', flagLevel: 3},
  {name: 'Haiti', capital: 'Port-au-Prince', capitalLevel: 2, citizens: 10600000, areasquarekm: 27750, citizenspersquarekm: 382, flag: 'assets/Flag_of_Haiti.svg', flagLevel: 3},
  {name: 'Honduras', capital: 'Tegucigalpa', capitalLevel: 2, citizens: 8900000, areasquarekm: 112090, citizenspersquarekm: 79.4, flag: 'assets/Flag_of_Honduras.svg', flagLevel: 2},
  {name: 'Indien', capital: 'Neu-Delhi', capitalAnswers: ['Mumbai'], capitalLevel: 1, citizens: 1352600000, areasquarekm: 3287263, citizenspersquarekm: 411, flag: 'assets/Flag_of_India.svg', flagLevel: 1},
  {name: 'Indonesien', capital: 'Jakarta', capitalLevel: 1, citizens: 264000000, areasquarekm: 1904569, citizenspersquarekm: 139, flag: 'assets/Flag_of_Indonesia.svg', flagLevel: 2},
  {name: 'Irak', capital: 'Bagdad', capitalLevel: 2, citizens: 39200000, areasquarekm: 438317, citizenspersquarekm: 89.4, flag: 'assets/Flag_of_Iraq.svg', flagLevel: 2},
  {name: 'Iran', capital: 'Teheran', capitalLevel: 1, citizens: 80600000, areasquarekm: 1648195, citizenspersquarekm: 48.9, flag: 'assets/Flag_of_Iran.svg', flagLevel: 1},
  {name: 'Irland', capital: 'Dublin', capitalLevel: 1, citizens: 4800000, areasquarekm: 70273, citizenspersquarekm: 68.3, flag: 'assets/Flag_of_Ireland.svg', flagLevel: 1},
  {name: 'Island', capital: 'Reykjavík', capitalLevel: 1, citizens: 350000, areasquarekm: 103000, citizenspersquarekm: 3.4, flag: 'assets/Flag_of_Iceland.svg', flagLevel: 1},
  {name: 'Israel', capital: 'Jerusalem', capitalLevel: 1, citizens: 8600000, areasquarekm: 22380, citizenspersquarekm: 384, flag: 'assets/Flag_of_Israel.svg', flagLevel: 1},
  {name: 'Italien', capital: 'Rom', capitalLevel: 1, citizens: 60500000, areasquarekm: 301340, citizenspersquarekm: 201, flag: 'assets/Flag_of_Italy.svg', flagLevel: 1},
  {name: 'Jamaika', capital: 'Kingston', capitalLevel: 2, citizens: 2900000, areasquarekm: 10991, citizenspersquarekm: 264, flag: 'assets/Flag_of_Jamaica.svg', flagLevel: 1},
  {name: 'Japan', capital: 'Tokio', capitalAnswers: ['Yokohama'], capitalLevel: 1, citizens: 126700000, areasquarekm: 377915, citizenspersquarekm: 335, flag: 'assets/Flag_of_Japan.svg', flagLevel: 1},
  {name: 'Jemen', capital: 'Sanaa', capitalLevel: 2, citizens: 28300000, areasquarekm: 527968, citizenspersquarekm: 53.6, flag: 'assets/Flag_of_Yemen.svg', flagLevel: 3},
  {name: 'Jordanien', capital: 'Amman', capitalLevel: 2, citizens: 9700000, areasquarekm: 89342, citizenspersquarekm: 109, flag: 'assets/Flag_of_Jordan.svg', flagLevel: 2},
  {name: 'Kambodscha', capital: 'Phnom Penh', capitalLevel: 2, citizens: 15900000, areasquarekm: 181035, citizenspersquarekm: 87.8, flag: 'assets/Flag_of_Cambodia.svg', flagLevel: 2},
  {name: 'Kamerun', capital: 'Yaoundé', capitalLevel: 2, citizens: 25000000, areasquarekm: 475440, citizenspersquarekm: 52.6, flag: 'assets/Flag_of_Cameroon.svg', flagLevel: 2},
  {name: 'Kanada', capital: 'Ottawa', capitalAnswers: ['Toronto','Vancouver'], capitalLevel: 1, citizens: 36700000, areasquarekm: 9984670, citizenspersquarekm: 3.68, flag: 'assets/Flag_of_Canada_(Pantone).svg', flagLevel: 1},
  {name: 'Kap Verde', capital: 'Praia', capitalLevel: 2, citizens: 517000, areasquarekm: 4033, citizenspersquarekm: 128, flag: 'assets/Flag_of_Cape_Verde.svg', flagLevel: 3},
  {name: 'Kasachstan', capital: 'Astana', capitalLevel: 2, citizens: 18000000, areasquarekm: 2724900, citizenspersquarekm: 6.61, flag: 'assets/Flag_of_Kazakhstan.svg', flagLevel: 2},
  {name: 'Katar', capital: 'Doha', capitalLevel: 2, citizens: 2700000, areasquarekm: 11586, citizenspersquarekm: 233, flag: 'assets/Flag_of_Qatar.svg', flagLevel: 2},
  {name: 'Kenia', capital: 'Nairobi', capitalLevel: 2, citizens: 49700000, areasquarekm: 580367, citizenspersquarekm: 85.6, flag: 'assets/Flag_of_Kenya.svg', flagLevel: 2},
  {name: 'Kirgisistan', capital: 'Bischkek', capitalLevel: 2, citizens: 6200000, areasquarekm: 199951, citizenspersquarekm: 31, flag: 'assets/Flag_of_Kyrgyzstan.svg', flagLevel: 3},
  {name: 'Kiribati', capital: 'South Tarawa', capitalLevel: 3, citizens: 100000, areasquarekm: 811, citizenspersquarekm: 123, flag: 'assets/Flag_of_Kiribati.svg', flagLevel: 3},
  {name: 'Kolumbien', capital: 'Bogotá', capitalLevel: 1, citizens: 49300000, areasquarekm: 1138910, citizenspersquarekm: 43.3, flag: 'assets/Flag_of_Colombia.svg', flagLevel: 1},
  {name: 'Komoren', capital: 'Moroni', capitalLevel: 3, citizens: 800000, areasquarekm: 2235, citizenspersquarekm: 358, flag: 'assets/Flag_of_the_Comoros.svg', flagLevel: 3},
  {name: 'Demokratische Republik Kongo', capitalLevel: 2, capital: 'Kinshasa', citizens: 81500000, areasquarekm: 2344858, citizenspersquarekm: 34.8, flag: 'assets/Flag_of_the_Democratic_Republic_of_the_Congo.svg', flagLevel: 2},
  {name: 'Republik Kongo', capital: 'Brazzaville', capitalLevel: 3, citizens: 5000000, areasquarekm: 342000, citizenspersquarekm: 14.6, flag: 'assets/Flag_of_the_Republic_of_the_Congo.svg', flagLevel: 3},
  {name: 'Nord Korea', capital: 'Pjöngjang', capitalLevel: 2, citizens: 25500000, areasquarekm: 120538, citizenspersquarekm: 212, flag: 'assets/Flag_of_North_Korea.svg', flagLevel: 2},
  {name: 'Süd Korea', capital: 'Seoul', capitalLevel: 1, citizens: 51400000, areasquarekm: 99720, citizenspersquarekm: 515, flag: 'assets/Flag_of_South_Korea.svg', flagLevel: 1},
  {name: 'Kosovo', capital: 'Pristina', capitalLevel: 2, citizens: 1800000, areasquarekm: 10887, citizenspersquarekm: 165, flag: 'assets/Flag_of_Kosovo.svg', flagLevel: 2},
  {name: 'Kroatien', capital: 'Zagreb (Agram)', capitalLevel: 1, citizens: 4100000, areasquarekm: 56594, citizenspersquarekm: 72.4, flag: 'assets/Flag_of_Croatia.svg', flagLevel: 2},
  {name: 'Kuba', capital: 'Havanna', capitalLevel: 1, citizens: 11300000, areasquarekm: 110860, citizenspersquarekm: 102, flag: 'assets/Flag_of_Cuba.svg', flagLevel: 2},
  {name: 'Kuwait', capital: 'Kuwait', capitalLevel: 1, citizens: 4100000, areasquarekm: 17818, citizenspersquarekm: 230, flag: 'assets/Flag_of_Kuwait.svg', flagLevel: 2},
  {name: 'Laos', capital: 'Vientiane', capitalLevel: 3, citizens: 7000000, areasquarekm: 236800, citizenspersquarekm: 29.6, flag: 'assets/Flag_of_Laos.svg', flagLevel: 2},
  {name: 'Lesotho', capital: 'Maseru', capitalLevel: 3, citizens: 2200000, areasquarekm: 30355, citizenspersquarekm: 72.5, flag: 'assets/Flag_of_Lesotho.svg', flagLevel: 3},
  {name: 'Lettland', capital: 'Riga', capitalLevel: 1, citizens: 1900000, areasquarekm: 64589, citizenspersquarekm: 29.4, flag: 'assets/Flag_of_Latvia.svg', flagLevel: 2},
  {name: 'Libanon', capital: 'Beirut', capitalLevel: 2, citizens: 6200000, areasquarekm: 10400, citizenspersquarekm: 596, flag: 'assets/Flag_of_Lebanon.svg', flagLevel: 2},
  {name: 'Liberia', capital: 'Monrovia', capitalLevel: 3, citizens: 4700000, areasquarekm: 111369, citizenspersquarekm: 42.2, flag: 'assets/Flag_of_Liberia.svg', flagLevel: 2},
  {name: 'Libyen', capital: 'Tripolis', capitalLevel: 2, citizens: 6400000, areasquarekm: 1759540, citizenspersquarekm: 3.64, flag: 'assets/Flag_of_Libya.svg', flagLevel: 2},
  {name: 'Liechtenstein', capital: 'Vaduz', citizens: 40000, areasquarekm: 160, citizenspersquarekm: 250, flag: 'assets/Flag_of_Liechtenstein.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Litauen', capital: 'Vilnius', citizens: 2800000, areasquarekm: 65300, citizenspersquarekm: 42.9, flag: 'assets/Flag_of_Lithuania.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Luxemburg', capital: 'Luxemburg', citizens: 600000, areasquarekm: 2586, citizenspersquarekm: 232, flag: 'assets/Flag_of_Luxembourg.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Madagaskar', capital: 'Antananarivo', citizens: 25500000, areasquarekm: 587041, citizenspersquarekm: 43.4, flag: 'assets/Flag_of_Madagascar.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Malawi', capital: 'Lilongwe', citizens: 18600000, areasquarekm: 118484, citizenspersquarekm: 157, flag: 'assets/Flag_of_Malawi.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Malaysia', capital: 'Kuala Lumpur', citizens: 31600000, areasquarekm: 329847, citizenspersquarekm: 95.8, flag: 'assets/Flag_of_Malaysia.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Malediven', capital: 'Malé', citizens: 400000, areasquarekm: 298, citizenspersquarekm: 1340, flag: 'assets/Flag_of_Maldives.svg', capitalLevel: 1, flagLevel: 3},
  {name: 'Mali', capital: 'Bamako', citizens: 18900000, areasquarekm: 1240192, citizenspersquarekm: 15.2, flag: 'assets/Flag_of_Mali.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Malta', capital: 'Valletta', citizens: 438000, areasquarekm: 316, citizenspersquarekm: 1390, flag: 'assets/Flag_of_Malta.svg', capitalLevel: 2, flagLevel: 1},
  {name: 'Marokko', capital: 'Rabat', citizens: 35100000, areasquarekm: 446550, citizenspersquarekm: 78.6, flag: 'assets/Flag_of_Morocco.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Marshallinseln', capital: 'Majuro', citizens: 60000, areasquarekm: 181, citizenspersquarekm: 331, flag: 'assets/Flag_of_the_Marshall_Islands.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Mauretanien', capital: 'Nouakchott', citizens: 4400000, areasquarekm: 1030700, citizenspersquarekm: 4.27, flag: 'assets/Flag_of_Mauritania.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Mauritius', capital: 'Port Louis', citizens: 1300000, areasquarekm: 2040, citizenspersquarekm: 637, flag: 'assets/Flag_of_Mauritius.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Mexiko', capital: 'Mexiko-Stadt', citizens: 129200000, areasquarekm: 1964375, citizenspersquarekm: 65.8, flag: 'assets/Flag_of_Mexico.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Mikronesien', capital: 'Palikir', citizens: 107000, areasquarekm: 702, citizenspersquarekm: 152, flag: 'assets/Flag_of_the_Federated_States_of_Micronesia.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Moldau mit Transnistrien', capital: 'Chișinău', citizens: 3900000, areasquarekm: 33851, citizenspersquarekm: 115, flag: 'assets/Flag_of_Moldova.svg', capitalLevel: 3, flagLevel: 2},
  {name: 'Monaco', capital: 'Monaco', citizens: 37800, areasquarekm: 2.03, citizenspersquarekm: 18600, flag: 'assets/Flag_of_Monaco.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Mongolei', capital: 'Ulaanbaatar', citizens: 3200000, areasquarekm: 1564116, citizenspersquarekm: 2.05, flag: 'assets/Flag_of_Mongolia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Montenegro', capital: 'Podgorica', citizens: 600000, areasquarekm: 13812, citizenspersquarekm: 43.4, flag: 'assets/Flag_of_Montenegro.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Mosambik', capital: 'Maputo', citizens: 29700000, areasquarekm: 799380, citizenspersquarekm: 37.2, flag: 'assets/Flag_of_Mozambique.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Myanmar', capital: 'Naypyidaw', citizens: 53400000, areasquarekm: 676578, citizenspersquarekm: 78.9, flag: 'assets/Flag_of_Myanmar.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Namibia', capital: 'Windhoek', citizens: 2500000, areasquarekm: 824292, citizenspersquarekm: 3.03, flag: 'assets/Flag_of_Namibia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Nauru', capital: 'Yaren', citizens: 10000, areasquarekm: 21, citizenspersquarekm: 476, flag: 'assets/Flag_of_Nauru.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Nepal', capital: 'Kathmandu', citizens: 29400000, areasquarekm: 147181, citizenspersquarekm: 200, flag: 'assets/Flag_of_Nepal.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Neuseeland', capital: 'Wellington', citizens: 4800000, areasquarekm: 267710, citizenspersquarekm: 17.9, flag: 'assets/Flag_of_New_Zealand.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Nicaragua', capital: 'Managua', citizens: 6200000, areasquarekm: 130730, citizenspersquarekm: 47.4, flag: 'assets/Flag_of_Nicaragua.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Niederlande', capital: 'Amsterdam', citizens: 17100000, areasquarekm: 41543, citizenspersquarekm: 412, flag: 'assets/Flag_of_the_Netherlands.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Niger', capital: 'Niamey', citizens: 20600000, areasquarekm: 1267000, citizenspersquarekm: 16.3, flag: 'assets/Flag_of_Niger.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Nigeria', capital: 'Abuja', citizens: 190900000, areasquarekm: 923768, citizenspersquarekm: 207, flag: 'assets/Flag_of_Nigeria.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Niue', capital: 'Alofi', citizens: 1229, areasquarekm: 260, citizenspersquarekm: 4.73, flag: 'assets/Flag_of_Niue.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Nordmazedonien', capital: 'Skopje', citizens: 2100000, areasquarekm: 25713, citizenspersquarekm: 81.7, flag: 'assets/Flag_of_North_Macedonia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Nordzypern', capital: 'Nord-Nikosia', citizens: 295000, areasquarekm: 3355, citizenspersquarekm: 87.9, flag: 'assets/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Norwegen', capital: 'Oslo', citizens: 5300000, areasquarekm: 323802, citizenspersquarekm: 16.4, flag: 'assets/Flag_of_Norway.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Oman', capital: 'Maskat', citizens: 4700000, areasquarekm: 309500, citizenspersquarekm: 15.2, flag: 'assets/Flag_of_Oman.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Österreich', capital: 'Wien', citizens: 8800000, areasquarekm: 83871, citizenspersquarekm: 105, flag: 'assets/Flag_of_Austria.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Osttimor / Timor-Leste', capital: 'Dili', citizens: 1300000, areasquarekm: 14874, citizenspersquarekm: 87.4, flag: 'assets/Flag_of_East_Timor.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Pakistan', capital: 'Islamabad', citizens: 207600000, areasquarekm: 796095, citizenspersquarekm: 261, flag: 'assets/Flag_of_Pakistan.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Palästina', capital: 'Ostjerusalem', citizens: 4900000, areasquarekm: 6220, citizenspersquarekm: 788, flag: 'assets/Flag_of_Palestine.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Palau', capital: 'Ngerulmud', citizens: 21000, areasquarekm: 459, citizenspersquarekm: 45.8, flag: 'assets/Flag_of_Palau.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Panama', capital: 'Panama-Stadt', citizens: 4100000, areasquarekm: 75420, citizenspersquarekm: 54.4, flag: 'assets/Flag_of_Panama.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Papua-Neuguinea', capital: 'Port Moresby', citizens: 8300000, areasquarekm: 462840, citizenspersquarekm: 17.9, flag: 'assets/Flag_of_Papua_New_Guinea.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Paraguay', capital: 'Asunción', citizens: 6800000, areasquarekm: 406752, citizenspersquarekm: 16.7, flag: 'assets/Flag_of_Paraguay.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Peru', capital: 'Lima', citizens: 31800000, areasquarekm: 1285216, citizenspersquarekm: 24.7, flag: 'assets/Flag_of_Peru.svg', capitalLevel: 2, flagLevel: 1},
  {name: 'Philippinen', capital: 'Manila', citizens: 105000000, areasquarekm: 299000, citizenspersquarekm: 351, flag: 'assets/Flag_of_the_Philippines.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Polen', capital: 'Warschau', citizens: 38400000, areasquarekm: 312685, citizenspersquarekm: 123, flag: 'assets/Flag_of_Poland.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Portugal', capital: 'Lissabon', citizens: 10300000, areasquarekm: 92090, citizenspersquarekm: 112, flag: 'assets/Flag_of_Portugal.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Ruanda', capital: 'Kigali', citizens: 12300000, areasquarekm: 26338, citizenspersquarekm: 467, flag: 'assets/Flag_of_Rwanda.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Rumänien', capital: 'Bukarest', citizens: 19600000, areasquarekm: 238391, citizenspersquarekm: 82.2, flag: 'assets/Flag_of_Romania.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Russland', capital: 'Moskau', citizens: 144500000, areasquarekm: 17098242, citizenspersquarekm: 8.45, flag: 'assets/Flag_of_Russia.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Salomonen', capital: 'Honiara', citizens: 700000, areasquarekm: 28896, citizenspersquarekm: 24.2, flag: 'assets/Flag_of_the_Solomon_Islands.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Sambia', capital: 'Lusaka', citizens: 16400000, areasquarekm: 752618, citizenspersquarekm: 21.8, flag: 'assets/Flag_of_Zambia.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Samoa', capital: 'Apia', citizens: 200000, areasquarekm: 2831, citizenspersquarekm: 70.6, flag: 'assets/Flag_of_Samoa.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'San Marino', capital: 'San Marino', citizens: 32800, areasquarekm: 61, citizenspersquarekm: 538, flag: 'assets/Flag_of_San_Marino.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'São Tomé', capital: 'São Tomé', citizens: 200000, areasquarekm: 964, citizenspersquarekm: 207, flag: 'assets/Flag_of_Sao_Tome_and_Principe.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Saudi-Arabien', capital: 'Riad', citizens: 32600000, areasquarekm: 2149690, citizenspersquarekm: 15.2, flag: 'assets/Flag_of_Saudi_Arabia.svg', capitalLevel: 2, flagLevel: 1},
  {name: 'Schweden', capital: 'Stockholm', citizens: 10100000, areasquarekm: 450295, citizenspersquarekm: 22.4, flag: 'assets/Flag_of_Sweden.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Schweiz', capital: 'Bern', capitalAnswers: ['Zürich'], citizens: 8500000, areasquarekm: 41277, citizenspersquarekm: 206, flag: 'assets/Flag_of_Switzerland_(Pantone).svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Senegal', capital: 'Dakar', citizens: 15800000, areasquarekm: 196722, citizenspersquarekm: 80.3, flag: 'assets/Flag_of_Senegal.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Serbien', capital: 'Belgrad', capitalAnswers: ['Budapest','Bukarest'], citizens: 7000000, areasquarekm: 77474, citizenspersquarekm: 90.4, flag: 'assets/Flag_of_Serbia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Seychellen', capital: 'Victoria', citizens: 90000, areasquarekm: 455, citizenspersquarekm: 198, flag: 'assets/Flag_of_Seychelles.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Sierra Leone', capital: 'Freetown', citizens: 7600000, areasquarekm: 71740, citizenspersquarekm: 106, flag: 'assets/Flag_of_Sierra_Leone.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Simbabwe', capital: 'Harare', citizens: 16600000, areasquarekm: 390757, citizenspersquarekm: 42.5, flag: 'assets/Flag_of_Zimbabwe.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Singapur', capital: 'Singapur', citizens: 5700000, areasquarekm: 697, citizenspersquarekm: 8180, flag: 'assets/Flag_of_Singapore.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Slowakei', capital: 'Bratislava', citizens: 5400000, areasquarekm: 49035, citizenspersquarekm: 110, flag: 'assets/Flag_of_Slovakia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Slowenien', capital: 'Ljubljana', citizens: 2100000, areasquarekm: 20273, citizenspersquarekm: 104, flag: 'assets/Flag_of_Slovenia.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Somalia', capital: 'Mogadischu', citizens: 14700000, areasquarekm: 637657, citizenspersquarekm: 23.1, flag: 'assets/Flag_of_Somalia.svg', capitalLevel: 3, flagLevel: 2},
  {name: 'Somaliland', capital: 'Hargeysa', citizens: 3500000, areasquarekm: 137600, citizenspersquarekm: 25.4, flag: 'assets/Flag_of_Somaliland.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Spanien', capital: 'Madrid', citizens: 46600000, areasquarekm: 505370, citizenspersquarekm: 92.2, flag: 'assets/Flag_of_Spain.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Sri Lanka', capital: 'Jayewardenepura Kotte', citizens: 21400000, areasquarekm: 65610, citizenspersquarekm: 326, flag: 'assets/Flag_of_Sri_Lanka.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'St. Kitts und Nevis', capital: 'Basseterre', citizens: 50000, areasquarekm: 261, citizenspersquarekm: 192, flag: 'assets/Flag_of_Saint_Kitts_and_Nevis.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'St. Lucia', capital: 'Castries', citizens: 200000, areasquarekm: 616, citizenspersquarekm: 325, flag: 'assets/Flag_of_Saint_Lucia.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'St. Vincent und die Grenadinen', capital: 'Kingstown', citizens: 104000, areasquarekm: 389, citizenspersquarekm: 267, flag: 'assets/Flag_of_Saint_Vincent_and_the_Grenadines.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Südafrika', capital: 'Bloemfontein/Kapstadt/Pretoria', citizens: 56500000, areasquarekm: 1219090, citizenspersquarekm: 46.3, flag: 'assets/Flag_of_South_Africa.svg', capitalLevel: 2, flagLevel: 1},
  {name: 'Sudan', capital: 'Khartum', citizens: 40600000, areasquarekm: 1886068, citizenspersquarekm: 21.5, flag: 'assets/Flag_of_Sudan.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Südossetien', capital: 'Zchinwali', citizens: 51000, areasquarekm: 3885, citizenspersquarekm: 13.1, flag: 'assets/Flag_of_South_Ossetia.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Südsudan', capital: 'Juba', citizens: 12600000, areasquarekm: 619745, citizenspersquarekm: 20.3, flag: 'assets/Flag_of_South_Sudan.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Suriname', capital: 'Paramaribo', citizens: 600000, areasquarekm: 163820, citizenspersquarekm: 3.66, flag: 'assets/Flag_of_Suriname.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Syrien', capital: 'Damaskus', citizens: 18300000, areasquarekm: 185180, citizenspersquarekm: 98.8, flag: 'assets/Flag_of_Syria.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Tadschikistan', capital: 'Duschanbe', citizens: 8800000, areasquarekm: 143100, citizenspersquarekm: 61.5, flag: 'assets/Flag_of_Tajikistan.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Tansania', capital: 'Dodoma', citizens: 57500000, areasquarekm: 947300, citizenspersquarekm: 60.7, flag: 'assets/Flag_of_Tanzania.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Thailand', capital: 'Bangkok', citizens: 66100000, areasquarekm: 513120, citizenspersquarekm: 129, flag: 'assets/Flag_of_Thailand.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Togo', capital: 'Lomé', citizens: 7800000, areasquarekm: 56785, citizenspersquarekm: 137, flag: 'assets/Flag_of_Togo.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Tonga', capital: 'Nukuʻalofa', citizens: 123000, areasquarekm: 747, citizenspersquarekm: 165, flag: 'assets/Flag_of_Tonga.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Transnistrien', capital: 'Tiraspol', citizens: 555000, areasquarekm: 3567, citizenspersquarekm: 156, flag: 'assets/Flag_of_Transnistria_(state).svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Trinidad und Tobago', capital: 'Port of Spain', citizens: 1400000, areasquarekm: 5128, citizenspersquarekm: 273, flag: 'assets/Flag_of_Trinidad_and_Tobago.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Tschad', capital: 'N’Djamena', citizens: 14900000, areasquarekm: 1284000, citizenspersquarekm: 11.6, flag: 'assets/Flag_of_Chad.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Tschechien', capital: 'Prag', citizens: 10600000, areasquarekm: 78867, citizenspersquarekm: 134, flag: 'assets/Flag_of_the_Czech_Republic.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Tunesien', capital: 'Tunis', citizens: 11500000, areasquarekm: 163610, citizenspersquarekm: 70.3, flag: 'assets/Flag_of_Tunisia.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Türkei', capital: 'Ankara', citizens: 83150000, areasquarekm: 783562, citizenspersquarekm: 103, flag: 'assets/Flag_of_Turkey.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Turkmenistan', capital: 'Aşgabat', citizens: 5800000, areasquarekm: 488100, citizenspersquarekm: 11.9, flag: 'assets/Flag_of_Turkmenistan.svg', capitalLevel: 2, flagLevel: 3},
  {name: 'Tuvalu', capital: 'Funafuti', citizens: 10000, areasquarekm: 26, citizenspersquarekm: 385, flag: 'assets/Flag_of_Tuvalu.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Uganda', capital: 'Kampala', citizens: 42800000, areasquarekm: 241038, citizenspersquarekm: 178, flag: 'assets/Flag_of_Uganda.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Ukraine', capital: 'Kiew', citizens: 42300000, areasquarekm: 603550, citizenspersquarekm: 70.1, flag: 'assets/Flag_of_Ukraine.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Ungarn', capital: 'Budapest', capitalAnswers: ['Bukarest'], citizens: 9800000, areasquarekm: 93028, citizenspersquarekm: 105, flag: 'assets/Flag_of_Hungary.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Uruguay', capital: 'Montevideo', citizens: 3500000, areasquarekm: 176215, citizenspersquarekm: 19.9, flag: 'assets/Flag_of_Uruguay.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Usbekistan', capital: 'Taschkent', citizens: 32600000, areasquarekm: 447400, citizenspersquarekm: 72.9, flag: 'assets/Flag_of_Uzbekistan.svg', capitalLevel: 2, flagLevel: 2},
  {name: 'Vanuatu', capital: 'Port Vila', citizens: 300000, areasquarekm: 12189, citizenspersquarekm: 24.6, flag: 'assets/Flag_of_Vanuatu.svg', capitalLevel: 3, flagLevel: 3},
  {name: 'Staat Vatikanstadt', capital: 'Vatikanstadt', citizens: 829, areasquarekm: 0.44, citizenspersquarekm: 1880, flag: 'assets/Flag_of_the_Vatican_City.svg', capitalLevel: 1, flagLevel: 2},
  {name: 'Venezuela', capital: 'Caracas', citizens: 31400000, areasquarekm: 912050, citizenspersquarekm: 34.4, flag: 'assets/Flag_of_Venezuela.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Vereinigte Arabische Emirate', capital: 'Abu Dhabi', citizens: 9400000, areasquarekm: 83600, citizenspersquarekm: 112, flag: 'assets/Flag_of_the_United_Arab_Emirates.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Vereinigte Staaten von Amerika', capital: 'Washington, D.C.', capitalAnswers: ['New York City'], citizens: 325400000, areasquarekm: 9826675, citizenspersquarekm: 33.1, flag: 'assets/Flag_of_the_United_States.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Vereinigtes Königreich', capital: 'London', citizens: 66200000, areasquarekm: 243610, citizenspersquarekm: 272, flag: 'assets/Flag_of_the_United_Kingdom.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Vietnam', capital: 'Hanoi', citizens: 93700000, areasquarekm: 331210, citizenspersquarekm: 283, flag: 'assets/Flag_of_Vietnam.svg', capitalLevel: 1, flagLevel: 1},
  {name: 'Westsahara', capital: 'El Aaiún', citizens: 600000, areasquarekm: 266000, citizenspersquarekm: 2.26, flag: 'assets/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg', capitalLevel: 3, flagLevel: 3},
];
// zentralafrika
// zypern


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  questionIndexHistory: number[];
  mySettings: GameSettings;
  

  constructor(private gameLevelService: GamelevelService) {
    this.gameLevelService.getSettingsAsObserveable().subscribe(settings => this.mySettings = settings);
    this.questionIndexHistory = [];
   }

  getElementData() {
    return ELEMENT_DATA;
  }

  getQuestionAndAnswersFromType(mySettings: GameSettings): Questionobject {
    return this.getQuestionFromTypes(mySettings.gameLevel, mySettings.questionMode[randomIntFromInterval(0,mySettings.questionMode.length-1)]);
  }

  getQuestionFromTypes(level: number, type: questionmodes) {
    let questionObject = new Questionobject();
    switch (type) {
      case questionmodes.capital:
        questionObject = this.getCapitalQuestion(level);
        break;
      case questionmodes.flag:
        questionObject = this.getFlagQuestion(level); 
        break;
      // case questionmodes.countryFromOutline:
      //   // follows
      //   break;
      // case questionmodes.countryOnMap:
      //   // follows
      //   break;
      default:
        // error handling
        break;
    }
    return questionObject;
  }

  getCapitalQuestion(level: number) {
    let questionobject = new Questionobject();
    questionobject.type = questionmodes.capital;
    let set = new Set<string>();
    // cuts same questions last 10 rounds out
    let correctCountryIndex: number;
    let matchLevel: boolean;
    do {
      correctCountryIndex = randomIntFromInterval(0, ELEMENT_DATA.length-1);
      matchLevel = ELEMENT_DATA[correctCountryIndex].capitalLevel <= level;
    } while (this.questionIndexHistory.includes(correctCountryIndex) || !matchLevel);
    this.questionIndexHistory.push(correctCountryIndex);
    (this.questionIndexHistory.length > 10) ? this.questionIndexHistory.shift() : "";
    questionobject.question = ELEMENT_DATA[correctCountryIndex].name;
    set.add(ELEMENT_DATA[correctCountryIndex].capital);
    // check injection
    this.mySettings.answerInjection ? ELEMENT_DATA[correctCountryIndex].capitalAnswers?.forEach(answer => set.add(answer)) : '';
    do {
      set.add(ELEMENT_DATA[randomIntFromInterval(0, ELEMENT_DATA.length-1)].capital);
    } while (set.size < 4);
    questionobject.answer = Array.from(set);
    shuffleArray(questionobject.answer);
    return questionobject;
  }

  getCorrectAnswerFromCapitalQuestion(question: Questionobject, index: number): number {
    const correctAnswer = ELEMENT_DATA.find(country => country.name === question.question);
    if (correctAnswer) {
      const capital = correctAnswer.capital
      return question.answer.indexOf(capital);
    } else {
      return 999;
    }
  }

  getFlagQuestion(level: number) {
    let questionobject = new Questionobject();
    questionobject.type = questionmodes.flag;
    let set = new Set<string>();
    // cuts same questions last 10 rounds out
    let correctCountryIndex: number;
    let matchLevel: boolean;
    do {
      correctCountryIndex = randomIntFromInterval(0, ELEMENT_DATA.length-1);
      matchLevel = ELEMENT_DATA[correctCountryIndex].flagLevel <= level;
    } while (this.questionIndexHistory.includes(correctCountryIndex) || !matchLevel);
    this.questionIndexHistory.push(correctCountryIndex);
    (this.questionIndexHistory.length > 10) ? this.questionIndexHistory.shift() : "";
    // builds question
    questionobject.question = ELEMENT_DATA[correctCountryIndex].flag;
    // adds correct answer
    set.add(ELEMENT_DATA[correctCountryIndex].name);
    do {
      // adds random answer
      set.add(ELEMENT_DATA[randomIntFromInterval(0, ELEMENT_DATA.length-1)].name);
    } while (set.size < 4);
    questionobject.answer = Array.from(set);
    shuffleArray(questionobject.answer);
    return questionobject;
  }

  getCorrectAnswerFromFlagQuestion(question: Questionobject, index: number) {
    const correctAnswer = ELEMENT_DATA.find(country => country.flag === question.question);
    if (correctAnswer) {
      const name = correctAnswer.name
      return question.answer.indexOf(name);
    } else {
      return 999;
    }
  }
  
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffleArray(array: any) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
