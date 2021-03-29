import React from 'react';
import Issue from './Issue';
import './issue.css'

class IssueList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issues: [],
        }
    }
    // React Life Cycle
    // constructor then render and then the mount
    componentDidMount() {
        this.fetchIssues();
    }

    // https://api.github.com/repos/facebook/create-react-app/issues

    fetchIssues = () => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    issues: data
                })
            })
    }
    


    render() {
        return(
            <div className="outer-box">
                {this.state.issues.map(issue => {
                    return(
                        <div key={issue.id}>
                            <Issue issue={issue} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default IssueList;