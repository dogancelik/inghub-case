// Simple employee store with localStorage persistence and events
const STORAGE_KEY = 'employee-records';

const fakeFirstNames = [
  'Ahmet',
  'Mehmet',
  'Ayşe',
  'Fatma',
  'Emre',
  'Zeynep',
  'Ali',
  'Elif',
  'Can',
  'Deniz',
];

function createFakeEmployees(length = 400) {
  return Array.from({length}, (_, i) => ({
    id: `fake-id-${i + 1}`,
    firstName: fakeFirstNames[i % fakeFirstNames.length],
    lastName: `LastName${i + 1}`,
    phone: `+9053${(i + 1).toString().padStart(8, '0')}`,
    email: `fake${i}@sourtimes.org`,
    department: i % 2 === 0 ? 'Analytics' : 'Tech',
    position: i % 3 === 0 ? 'Junior' : i % 3 === 1 ? 'Mid' : 'Senior',
    dateOfEmployment: new Date(2022, 8, 23 + (i % 30))
      .toISOString()
      .split('T')[0],
    dateOfBirth: new Date(1990, 0, 1 + (i % 30)).toISOString().split('T')[0],
  }));
}

function loadEmployees() {
  let fakeEmployees = [];
  try {
    fakeEmployees = createFakeEmployees();
  } catch {}

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || fakeEmployees;
  } catch {
    return fakeEmployees;
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
    employees = employees.map((e) => (e.id === id ? {...e, ...updated} : e));
    saveEmployees(employees);
    notify();
  },
  delete(id) {
    let employees = loadEmployees();
    employees = employees.filter((e) => e.id !== id);
    saveEmployees(employees);
    notify();
  },
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  isUnique(email, phone, excludeId = null) {
    const employees = loadEmployees();
    return !employees.some(
      (e) => (e.email === email || e.phone === phone) && e.id !== excludeId
    );
  },
  getById(id) {
    return loadEmployees().find((e) => e.id === id);
  },
};

function notify() {
  listeners.forEach((fn) => fn());
}
