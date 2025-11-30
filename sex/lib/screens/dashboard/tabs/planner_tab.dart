import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../../../providers/task_provider.dart';
import '../../../models/task_model.dart';
import '../../../config/theme.dart';

class PlannerTab extends StatefulWidget {
  const PlannerTab({Key? key}) : super(key: key);

  @override
  State<PlannerTab> createState() => _PlannerTabState();
}

class _PlannerTabState extends State<PlannerTab> {
  DateTime _selectedDate = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Planner'),
        elevation: 0,
        backgroundColor: Colors.transparent,
      ),
      body: Consumer<TaskProvider>(
        builder: (context, taskProvider, _) {
          final tasksForDate = taskProvider.tasks
              .where((task) {
                if (task.scheduledDate == null) return false;
                return task.scheduledDate!.year == _selectedDate.year &&
                    task.scheduledDate!.month == _selectedDate.month &&
                    task.scheduledDate!.day == _selectedDate.day;
              })
              .toList();

          return SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Calendar header
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: AppTheme.primaryColor.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        DateFormat('MMMM yyyy').format(_selectedDate),
                        style: Theme.of(context).textTheme.headlineSmall,
                      ),
                      const SizedBox(height: 16),
                      _buildCalendarGrid(),
                    ],
                  ),
                ),
                const SizedBox(height: 32),
                // Tasks for selected date
                Text(
                  'Tasks for ${DateFormat('MMM dd, yyyy').format(_selectedDate)}',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 16),
                if (tasksForDate.isEmpty)
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 32),
                      child: Text(
                        'No tasks scheduled for this date',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ),
                  )
                else
                  ...tasksForDate.map((task) {
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: _buildTaskItem(context, task),
                    );
                  }).toList(),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildCalendarGrid() {
    final firstDay = DateTime(_selectedDate.year, _selectedDate.month, 1);
    final lastDay = DateTime(_selectedDate.year, _selectedDate.month + 1, 0);
    final daysInMonth = lastDay.day;
    final startingDayOfWeek = firstDay.weekday;

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 7,
        mainAxisSpacing: 8,
        crossAxisSpacing: 8,
      ),
      itemCount: daysInMonth + startingDayOfWeek - 1,
      itemBuilder: (context, index) {
        if (index < startingDayOfWeek - 1) {
          return const SizedBox();
        }

        final day = index - startingDayOfWeek + 2;
        final date = DateTime(_selectedDate.year, _selectedDate.month, day);
        final isSelected = date.day == _selectedDate.day &&
            date.month == _selectedDate.month &&
            date.year == _selectedDate.year;

        return GestureDetector(
          onTap: () {
            setState(() => _selectedDate = date);
          },
          child: Container(
            decoration: BoxDecoration(
              color: isSelected ? AppTheme.primaryColor : Colors.transparent,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(
                color: isSelected ? AppTheme.primaryColor : AppTheme.borderColor,
              ),
            ),
            child: Center(
              child: Text(
                day.toString(),
                style: TextStyle(
                  color: isSelected ? Colors.white : AppTheme.textPrimaryColor,
                  fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildTaskItem(BuildContext context, TaskModel task) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: AppTheme.borderColor),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          Container(
            width: 4,
            height: 40,
            decoration: BoxDecoration(
              color: _getPriorityColor(task.priority),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  task.title,
                  style: Theme.of(context).textTheme.bodyLarge,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 4),
                Text(
                  task.priority.name.toUpperCase(),
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: _getPriorityColor(task.priority),
                      ),
                ),
              ],
            ),
          ),
          Checkbox(
            value: task.status == TaskStatus.completed,
            onChanged: (value) {},
          ),
        ],
      ),
    );
  }

  Color _getPriorityColor(TaskPriority priority) {
    switch (priority) {
      case TaskPriority.urgent:
        return AppTheme.errorColor;
      case TaskPriority.high:
        return AppTheme.warningColor;
      case TaskPriority.medium:
        return AppTheme.primaryColor;
      case TaskPriority.low:
        return AppTheme.successColor;
    }
  }
}
