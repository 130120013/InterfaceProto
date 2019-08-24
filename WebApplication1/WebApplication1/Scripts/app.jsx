class ProjectsPanel extends React.Component {
    render() {
        return (
            <div>
                <input type="button" id="loadProject" value="Загрузить проект" />
                <input type="button" id="createProject" value="Создать проект" />
            </div>
        );
    }
}

class ProjectForm extends React.Component {
    render() {
        return (
            <div>
                <label>Название проекта</label>
                <input type="text" id="projectName" />
                <label>Геометрическая модель</label>
                <input type="file" id="geometry" />
                <input type="button" id="saveProject" value="Сохранить проект" />
                <input type="button" id="startModel" value="Начать моделирование" />
            </div>
        );
    }
}
ReactDOM.render(
    <ProjectsPanel />,
    document.getElementById("projects-panel")
);
ReactDOM.render(
    <ProjectForm />,
    document.getElementById("form-panel")
);