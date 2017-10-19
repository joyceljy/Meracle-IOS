import { connect } from 'react-redux';
import EditPasswordComponent from '../components/EditPassword_component';
import { Actions } from 'react-native-router-flux';
import { EditPasswordAction } from '../actions/EditPassword_action';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
editpwd_status: state.Editpwd_status,
login_account: state.login_account,
});

const mapDispatchToProps = (dispatch) => ({

    EditPasswordClick: (account,password) => {
        dispatch(EditPasswordAction(account,password));
    },
    MindWave: () => {
        Actions.MindwaveTest();
    },
}
);

class EditPasswordContainer  extends EditPasswordComponent  {
    constructor(props) {
        super(props);
        this.state = {
           
            err1: false,
            success1:false,
            passerr:false,
        }
    }

    componentDidMount() {
        
            //signalr
            const connection = signalr.hubConnection('http://signalrchattestpj.azurewebsites.net');
            connection.logging = true;
    
            const proxy = connection.createHubProxy('chatHub');
    
            proxy.on('addNewMessageToPage', (argOne, argTwo, ) => {
                console.log('message-from-server', argOne, argTwo);
                if (argOne == 'openMindwavePage') {
    
                    proxy.invoke('send', 'haveOpened', '');
                    this.props.MindWave();
                    connection.stop();
                }
            });
    
            // atempt connection, and handle errors
            connection.start().done(() => {
                console.log('Now connected, connection ID=' + connection.id);
            }).fail(() => {
                console.log('Failed');
            });
        

    };

    componentWillReceiveProps(nextProps) {
        const { editpwd_status } = nextProps;

        //成功則
        if (editpwd_status === true) {
           
            Actions.home();
        }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordContainer);