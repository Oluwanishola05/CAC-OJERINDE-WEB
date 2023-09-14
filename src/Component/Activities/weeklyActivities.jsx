import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Activities/weeklyActivities.css';

const WeeklyActivities = () => {
  return (
    <div className='hero__section2'>
      <section>
        <Container>
            <Row>
                <h3 className='title'> CHURCH WEEKLY AND MONTHLY ACTIVITIES</h3>
                <table className='table'>
                    <thead>
                        <td>Days</td>
                        <td>Church Activities</td>
                        <td>Time</td>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>Bible Study</td>
                            <td>6:00 PM</td>
                        </tr>

                        <tr>
                            <td>Tuesday</td>
                            <td>Fruit of the Womb</td>
                            <td>9:00 AM</td>
                        </tr>

                        <tr>
                            <td>Wednesday</td>
                            <td>Possibility/Solution Hour</td>
                            <td>6:00 PM</td>
                        </tr>

                        <tr>
                            <td>Thursday</td>
                            <td>Good Women Fellowship</td>
                            <td>6:00 PM</td>
                        </tr>

                        <tr>
                            <td>1st Friday of the Month</td>
                            <td>Youth Vigil</td>
                            <td>12:00 AM</td>
                        </tr>

                        <tr>
                            <td>3rd Friday of the Month</td>
                            <td>Overcommers' Night</td>
                            <td>12:00 AM</td>
                        </tr>

                           
                    </tbody>
                </table>

            </Row>
        </Container>
      </section>
    </div>
  )
}

export default WeeklyActivities;
