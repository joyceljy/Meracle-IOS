import { connect } from 'react-redux';
import SleepingavgComponent from '../components/Sleepingavg_component';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    PublicSleepOrderby: state.PublicSleepOrderby,
    PublicSleepset: state.PublicSleepTotalset

});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.pop()
    },


}
);

class SleepingavgContainer extends SleepingavgComponent {
    constructor(props) {
        super(props);
        // "6小時以下",
        // "6-7小時",
        // "7-8小時",
        // "8-9小時",
        // "9-10小時",
        // "10小時以上",
        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: "SQUARE",
                formSize: 14,
                xEntrySpace: 8,
                yEntrySpace: 5,
                wordWrapEnabled: true
            },
            data: {
                dataSets: [{
                    values: this.props.PublicSleepset,
                    label: '睡眠時間',
                    config: {
                        lineWidth: 3,
                        drawValues: false,
                        circleRadius: 4,
                      
                        color: processColor('#F5808B'),
                        valueTextColor: processColor('#F5808B'),
                        circleHoleColor: processColor('#F5808B'),
                        drawFilled: true,
                        valueTextSize: 14,

                        fillColor: processColor('#F5808B'),
                        fillAlpha: 50,
                        valueFormatter: "###",
                        circleColor: processColor('#F5808B'),
                    }
                }],
                config: {
                    barWidth: 0.1,
                    drawValues: false
                }

            },
            xline: {
                drawLabels: true,
                valueFormatter: ['6小時以下', '6-7小時', "7-8小時", "8-9小時",  "10小時以上"],
                textColor: processColor('rgba(255,255,255,0.8)'),
                textSize: 8,
                position: 'BOTTOM',
                gridDashedLine: {
                    lineLength: 8,
                    spaceLength: 8
                },
                granularityEnabled: true,
                granularity: 1,
            },
            yline:
            {
                left: {
                    textColor: processColor('#B4DAE5'),
                    textSize: 10,
                    drawAxisLine: false,
                    gridDashedLine: {
                        lineLength: 8,
                        spaceLength: 8
                    },
                },
                right: {
                    drawLabels: false,
                    drawAxisLine: false,
                    gridDashedLine: {
                        lineLength: 8,
                        spaceLength: 8
                    },
                },


            },
            PublicSleepSort: [],
        };
    }

    componentDidMount() {


    }
    componentWillMount() {

    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SleepingavgContainer);
