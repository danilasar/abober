import ConnectionInfo from "./api";
import SimpleGetJson from "./simple-get-json";
const getOrganisations = async (inn: string) => {
    //return await SimpleGetJson(ConnectionInfo.url + "/get_data_by_inn/" + inn);
    let json = [
        {
          "value": "ГКСУ АО ЦС АДАПТАЦИИ",
          "unrestricted_value": "ГОСУДАРСТВЕННОЕ КАЗЕННОЕ СТАЦИОНАРНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ \"ЦЕНТР СОЦИАЛЬНОЙ АДАПТАЦИИ\"",
          "data": {
            "inn": "3009011845",
            "ogrn": "1033000812470",
            "kpp": "300901001",
            "fio": {
              "surname": null,
              "name": null,
              "patronymic": null,
              "gender": null
            },
            "name": {
              "full_with_opf": "ГОСУДАРСТВЕННОЕ КАЗЕННОЕ СТАЦИОНАРНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ \"ЦЕНТР СОЦИАЛЬНОЙ АДАПТАЦИИ\"",
              "short_with_opf": "ГКСУ АО ЦС АДАПТАЦИИ"
            },
            "type": "LEGAL",
            "state": {
              "status": "ACTIVE",
              "code": null,
              "registration_date": "2003-03-03",
              "liquidation_date": null
            },
            "address": {
              "value": "Астраханская обл, Приволжский р-н, село Осыпной Бугор, ул Астраханская",
              "region_code": "30",
              "region_type": null,
              "region": null,
              "area_type": null,
              "area": null,
              "city_type": null,
              "city": null,
              "settlement_type": null,
              "settlement": null
            },
            "okved": "87.90",
            "okveds": [
              {
                "main": true,
                "type": "2014",
                "code": "87.90",
                "name": "Деятельность по уходу с обеспечением проживания прочая"
              }
            ],
            "employee_count": null,
            "management": {
              "name": "СУМИН ЕВГЕНИЙ ВАСИЛЬЕВИЧ",
              "post": null,
              "disqualified": null
            }
          }
        },
        {
          "value": "ГКСУ АО ЦС АДАПТАЦИИ",
          "unrestricted_value": "ГОСУДАРСТВЕННОЕ КАЗЕННОЕ СТАЦИОНАРНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ \"ЦЕНТР СОЦИАЛЬНОЙ АДАПТАЦИИ\"",
          "data": {
            "inn": "3009011845",
            "ogrn": "1033000812470",
            "kpp": "300901001",
            "fio": {
              "surname": null,
              "name": null,
              "patronymic": null,
              "gender": null
            },
            "name": {
              "full_with_opf": "ГОСУДАРСТВЕННОЕ КАЗЕННОЕ СТАЦИОНАРНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ \"ЦЕНТР СОЦИАЛЬНОЙ АДАПТАЦИИ\"",
              "short_with_opf": "ГКСУ АО ЦС АДАПТАЦИИ"
            },
            "type": "LEGAL",
            "state": {
              "status": "ACTIVE",
              "code": null,
              "registration_date": "2003-03-03",
              "liquidation_date": null
            },
            "address": {
              "value": "Астраханская обл, Приволжский р-н, село Осыпной Бугор, ул Астраханская",
              "region_code": "30",
              "region_type": null,
              "region": null,
              "area_type": null,
              "area": null,
              "city_type": null,
              "city": null,
              "settlement_type": null,
              "settlement": null
            },
            "okved": "87.90",
            "okveds": [
              {
                "main": true,
                "type": "2014",
                "code": "87.90",
                "name": "Деятельность по уходу с обеспечением проживания прочая"
              }
            ],
            "employee_count": null,
            "management": {
              "name": "СУМИН ЕВГЕНИЙ ВАСИЛЬЕВИЧ",
              "post": null,
              "disqualified": null
            }
          }
        }
      ];
    return json      
}

export default getOrganisations