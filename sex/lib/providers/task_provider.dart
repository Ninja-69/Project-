import 'package:flutter/material.dart';
import '../models/task_model.dart';
import '../services/supabase_service.dart';

class TaskProvider extends ChangeNotifier {
  final SupabaseService _supabaseService = SupabaseService();
  
  List<TaskModel> _tasks = [];
  bool _isLoading = false;
  String? _error;

  List<TaskModel> get tasks => _tasks;
  bool get isLoading => _isLoading;
  String? get error => _error;

  List<TaskModel> get pendingTasks => _tasks.where((t) => t.status == TaskStatus.pending).toList();
  List<TaskModel> get completedTasks => _tasks.where((t) => t.status == TaskStatus.completed).toList();
  List<TaskModel> get urgentTasks => _tasks.where((t) => t.priority == TaskPriority.urgent).toList();

  Future<void> loadTasks(String userId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      _tasks = await _supabaseService.getUserTasks(userId);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> createTask(TaskModel task) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final newTask = await _supabaseService.createTask(task);
      _tasks.add(newTask);
      return true;
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> updateTask(TaskModel task) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final updatedTask = await _supabaseService.updateTask(task);
      final index = _tasks.indexWhere((t) => t.id == task.id);
      if (index != -1) {
        _tasks[index] = updatedTask;
      }
      return true;
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> deleteTask(String taskId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      await _supabaseService.deleteTask(taskId);
      _tasks.removeWhere((t) => t.id == taskId);
      return true;
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> createMultipleTasks(List<TaskModel> tasks) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final newTasks = await _supabaseService.createMultipleTasks(tasks);
      _tasks.addAll(newTasks);
      return true;
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}
