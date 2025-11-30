import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../../models/task_model.dart';
import '../../../providers/task_provider.dart';
import '../../../config/theme.dart';
import 'package:intl/intl.dart';

class TaskCard extends StatelessWidget {
  final TaskModel task;

  const TaskCard({Key? key, required this.task}) : super(key: key);

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

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: AppTheme.borderColor),
        borderRadius: BorderRadius.circular(12),
        color: task.status == TaskStatus.completed
            ? AppTheme.successColor.withOpacity(0.05)
            : Colors.transparent,
      ),
      child: Row(
        children: [
          GestureDetector(
            onTap: () async {
              final taskProvider = context.read<TaskProvider>();
              final newStatus = task.status == TaskStatus.completed
                  ? TaskStatus.pending
                  : TaskStatus.completed;
              await taskProvider.updateTask(task.copyWith(status: newStatus));
            },
            child: Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(
                  color: task.status == TaskStatus.completed
                      ? AppTheme.successColor
                      : _getPriorityColor(task.priority),
                  width: 2,
                ),
                color: task.status == TaskStatus.completed
                    ? AppTheme.successColor
                    : Colors.transparent,
              ),
              child: task.status == TaskStatus.completed
                  ? const Icon(
                      Icons.check,
                      size: 14,
                      color: Colors.white,
                    )
                  : null,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  task.title,
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        decoration: task.status == TaskStatus.completed
                            ? TextDecoration.lineThrough
                            : null,
                      ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 2,
                      ),
                      decoration: BoxDecoration(
                        color: _getPriorityColor(task.priority).withOpacity(0.1),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(
                        task.priority.name.toUpperCase(),
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: _getPriorityColor(task.priority),
                              fontWeight: FontWeight.w600,
                            ),
                      ),
                    ),
                    if (task.dueDate != null) ...[
                      const SizedBox(width: 8),
                      Icon(
                        Icons.calendar_today,
                        size: 12,
                        color: AppTheme.textSecondaryColor,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        DateFormat('MMM dd').format(task.dueDate!),
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: AppTheme.textSecondaryColor,
                            ),
                      ),
                    ],
                    if (task.isAiGenerated) ...[
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 6,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: AppTheme.primaryColor.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(4),
                        ),
                        child: Text(
                          'AI',
                          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                color: AppTheme.primaryColor,
                                fontWeight: FontWeight.w600,
                              ),
                        ),
                      ),
                    ],
                  ],
                ),
              ],
            ),
          ),
          PopupMenuButton(
            itemBuilder: (context) => [
              PopupMenuItem(
                child: const Text('Edit'),
                onTap: () {},
              ),
              PopupMenuItem(
                child: const Text('Delete'),
                onTap: () async {
                  final taskProvider = context.read<TaskProvider>();
                  await taskProvider.deleteTask(task.id);
                },
              ),
            ],
          ),
        ],
      ),
    );
  }
}
