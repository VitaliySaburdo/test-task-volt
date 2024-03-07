import { StatusFilter } from '../status-filter/status-filter'
import { TaskCounter } from '../task-counter/task-counter'

export const AppBar = () => {
  return (
    <header>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  )
}
