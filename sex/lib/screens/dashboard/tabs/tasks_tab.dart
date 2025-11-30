import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../../providers/task_provider.dart';
import '../../../models/task_model.dart';
import '../../../config/theme.dart';
import '../widgets/task_card.dart';

class TasksTab extends StatefulWidget {
  const TasksTab({Key? key}) : super(key: key);

  @override
  State<TasksTab> createState() => _TasksTabState();
}

class _TasksTabState extends State<TasksTab> {
  String _filterStatus = 'all';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Tasks'),
        elevation: 0,
        backgroundColor: Colors.transparent,
      ),
      body: Consumer<TaskProvider>(
        builder: (context, taskProvider, _) {
          List<TaskModel> filteredTasks = taskProvider.tasks;

          if (_filterStatus == 'pending') {
            filteredTasks = taskProvider.pendingTasks;
          } else if (_filterStatus == 'completed') {
            filteredTasks = taskProvider.completedTasks;
          }

          if (filteredTasks.isEmpty) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.inbox_outlined,
                    size: 64,
                    color: AppTheme.textSecondaryColor.withOpacity(0.5),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'No tasks yet',
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                          color: AppTheme.textSecondaryColor,
                        ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Chat with AI to generate tasks',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ],
              ),
            );
          }

          return SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Filter chips
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      _buildFilterChip('All', 'all'),
                      const SizedBox(width: 8),
                      _buildFilterChip('Pending', 'pending'),
                      const SizedBox(width: 8),
                      _buildFilterChip('Completed', 'completed'),
                    ],
                  ),
                ),
                const SizedBox(height: 24),
                // Tasks list
                ...filteredTasks.map((task) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: TaskCard(task: task),
                  );
                }).toList(),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildFilterChip(String label, String value) {
    final isSelected = _filterStatus == value;
    return FilterChip(
      label: Text(label),
      selected: isSelected,
      onSelected: (selected) {
        setState(() => _filterStatus = value);
      },
      backgroundColor: Colors.transparent,
      selectedColor: AppTheme.primaryColor.withOpacity(0.2),
      side: BorderSide(
        color: isSelected ? AppTheme.primaryColor : AppTheme.borderColor,
      ),
    );
  }
}
