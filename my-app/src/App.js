import React from "react";
import { Input } from "./Input";
import { Loader } from "./Loader";
import { debounce } from "lodash";
import { Table } from "./Table";
import { Dropdown } from "./Dropdown";

export class App extends React.Component {
    state = {
      isLoading: false,
      isError: false,
      value: "Minsk",
      data: [],
    };
    getData = async () => {
        const key = process.env.REACT_APP_OPEN_WEATHER_TOKEN;
        const value = this.state.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}=${value}&units=metric`;
        this.setState({
          isLoading: true,
        });
    
        fetch(url)
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error("Oшибка");
          })
          .then((data) => {
            this.setState({ data: data.main });
          })
          .catch(() => {
            this.setState({ isError: true });
          })
          .finally(() => {
            this.setState({ isLoading: false });
          });
      };
      
      getDataDebounced = debounce(this.getData, 1500);
    
      componentDidMount() {
        this.getData();
      }
    
      componentDidUpdate(_, prev) {
        if (this.state.value === prev.value) {
          return;
        }
        this.getDataDebounced();
      }
    
      change = (e) => {
        this.setState({
          value: e.target.value,
        });
      };
    
      render() {
        const { isLoading, isError, value, data } = this.state;
        return (
          <div>
            <div >
              <div>
                Введите название города:
                <Input value={value} onChange={this.change}/> 
              </div>
            </div>
            <Dropdown/>
            {isLoading && <Loader />}
        {isError &&!isLoading &&"Произошла ошибка, попробуйте позже"}
        {isError && !isLoading && "Искомый город не найден - попробуйте изменить запрос"}
        {!isError && !isLoading && ( <Table value={value} data={data} />
        )}
          </div>
        );
      }
    }