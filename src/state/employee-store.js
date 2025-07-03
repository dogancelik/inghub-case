// Simple employee store with localStorage persistence and events
const STORAGE_KEY = 'employee-records';

function loadEmployees() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveEmployees(employees) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

const listeners = new window.Set();

export const employeeStore = {
  getAll() {
    return loadEmployees();
  },
  add(employee) {
    const employees = loadEmployees();
    employees.push(employee);
    saveEmployees(employees);
    notify();
  },
  update(id, updated) {
    let employees = loadEmployees();
    employees = employees.map(e => e.id === id ? { ...e, ...updated } : e);
    saveEmployees(employees);
    notify();
  },
  delete(id) {
    let employees = loadEmployees();
    employees = employees.filter(e => e.id !== id);
    saveEmployees(employees);
    notify();
  },
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  isUnique(email, phone, excludeId = null) {
    const employees = loadEmployees();
    return !employees.some(e => (e.email === email || e.phone === phone) && e.id !== excludeId);
  },
  getById(id) {
    return loadEmployees().find(e => e.id === id);
  }
};

function notify() {
  listeners.forEach(fn => fn());
}
