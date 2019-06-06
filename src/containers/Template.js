import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// eslint-disable-next-line no-unused-vars'


class Template extends Component{

    render() {
        return(
            <MuiThemeProvider>
                 <div>
                <header>
                     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
                     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <h1>TicTacTuring</h1>
                        <Button variant="contained" color="primary"  onTochTap={()=>{console.log('Hello, I am working')}}>
                                Primary Button
                           
                        </Button>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>

            </MuiThemeProvider>
           
        )
    }
}

export default Template