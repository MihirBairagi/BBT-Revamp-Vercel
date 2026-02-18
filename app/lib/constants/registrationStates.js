const BASE_STATE_LIST = [
  { code: 'AP', name: 'Andhra Pradesh' },
  { code: 'AR', name: 'Arunachal Pradesh' },
  { code: 'AS', name: 'Assam' },
  { code: 'BR', name: 'Bihar' },
  { code: 'CG', name: 'Chhattisgarh', altNames: ['Chattisgarh'] },
  { code: 'GA', name: 'Goa' },
  { code: 'GJ', name: 'Gujarat' },
  { code: 'HR', name: 'Haryana' },
  { code: 'HP', name: 'Himachal Pradesh' },
  { code: 'JH', name: 'Jharkhand' },
  { code: 'KA', name: 'Karnataka' },
  { code: 'KL', name: 'Kerala' },
  { code: 'MP', name: 'Madhya Pradesh' },
  { code: 'MH', name: 'Maharashtra' },
  { code: 'MN', name: 'Manipur' },
  { code: 'ML', name: 'Meghalaya' },
  { code: 'MZ', name: 'Mizoram' },
  { code: 'NL', name: 'Nagaland' },
  { code: 'OD', name: 'Odisha', altCodes: ['OR'], altNames: ['Orissa'] },
  { code: 'PB', name: 'Punjab' },
  { code: 'RJ', name: 'Rajasthan' },
  { code: 'SK', name: 'Sikkim' },
  { code: 'TN', name: 'Tamil Nadu' },
  { code: 'TS', name: 'Telangana', altCodes: ['TG'] },
  { code: 'TR', name: 'Tripura' },
  { code: 'UP', name: 'Uttar Pradesh' },
  { code: 'UK', name: 'Uttarakhand', altCodes: ['UT'], altNames: ['Uttaranchal'] },
  { code: 'WB', name: 'West Bengal' },
  // Union Territories
  { code: 'AN', name: 'Andaman and Nicobar Islands', altCodes: ['AN'], altNames: ['Andaman & Nicobar Islands'] },
  { code: 'CH', name: 'Chandigarh' },
  { code: 'DD', name: 'Dadra and Nagar Haveli and Daman and Diu', altNames: ['Dadra & Nagar Haveli and Daman & Diu', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Dadra Nagar Haveli Daman Diu'] },
  { code: 'DL', name: 'Delhi', altNames: ['New Delhi'] },
  { code: 'JK', name: 'Jammu and Kashmir', altCodes: ['J&K'], altNames: ['Jammu & Kashmir'] },
  { code: 'LD', name: 'Lakshadweep' },
  { code: 'PY', name: 'Puducherry', altNames: ['Pondicherry'] },
  { code: 'LA', name: 'Ladakh' },
  // Special registrations
  { code: 'BH', name: 'Bharat', altNames: ['Bharat Series', 'BH Series'] },
];

const SANITIZE_REGEX = /[\s&.-]/g;

function sanitize(value = '') {
  return value.replace(SANITIZE_REGEX, '').toLowerCase();
}

function buildAliases(state) {
  const aliases = new Set();
  aliases.add(state.code);
  aliases.add(state.code.toLowerCase());
  (state.altCodes || []).forEach((code) => {
    aliases.add(code);
    aliases.add(code.toLowerCase());
  });
  aliases.add(state.name);
  aliases.add(state.name.toLowerCase());
  aliases.add(sanitize(state.name));
  (state.altNames || []).forEach((name) => {
    aliases.add(name);
    aliases.add(name.toLowerCase());
    aliases.add(sanitize(name));
  });
  return Array.from(aliases).filter(Boolean);
}

export const REGISTRATION_STATES = BASE_STATE_LIST.map((state) => ({
  ...state,
  value: `${state.code}::${state.name}`,
  label: `${state.name} (${state.code})`,
  aliases: buildAliases(state),
}));

const STATE_BY_VALUE = new Map(REGISTRATION_STATES.map((state) => [state.value, state]));

function findByAliases(input) {
  if (!input) return undefined;
  const target = sanitize(input);
  return REGISTRATION_STATES.find((state) =>
    state.aliases.some((alias) => sanitize(alias) === target)
  );
}

export function findStateOptionByValue(value) {
  if (!value) return undefined;
  if (STATE_BY_VALUE.has(value)) {
    return STATE_BY_VALUE.get(value);
  }
  const directMatch = REGISTRATION_STATES.find((state) => state.value === value);
  if (directMatch) return directMatch;

  const fallback = findByAliases(value);
  if (fallback) return fallback;

  // Handle legacy delimited formats (e.g. "DL|Delhi" or "DL::Delhi")
  const parts = String(value)
    .split(/[:|,;]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  for (const part of parts) {
    const matched = findByAliases(part);
    if (matched) return matched;
  }

  return undefined;
}

export function findStateOptionByAlias(value) {
  if (!value) return undefined;
  return findByAliases(value);
}

export function normalizeStateFilterValue(value) {
  const option = findStateOptionByValue(value);
  return option ? option.value : value || '';
}

export function getStateLabelFromFilterValue(value) {
  const option = findStateOptionByValue(value);
  if (option) {
    return option.label;
  }

  if (!value) return '';

  const parts = String(value)
    .split(/[:|,;]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return value;
  if (parts.length === 1) return parts[0];
  return `${parts[1]} (${parts[0]})`;
}

export function getStateQueryFromFilterValue(value) {
  if (!value) return '';
  const option = findStateOptionByValue(value);
  const aliasSet = new Set();

  if (option) {
    option.aliases.forEach((alias) => {
      const trimmed = alias.trim();
      if (trimmed) {
        aliasSet.add(trimmed);
      }
    });
  } else {
    const parts = String(value)
      .split(/[:|,;]+/)
      .map((part) => part.trim())
      .filter(Boolean);
    parts.forEach((part) => aliasSet.add(part));
  }

  // Ensure primary code/name variants exist
  if (option) {
    aliasSet.add(option.code);
    aliasSet.add(option.code.toLowerCase());
    aliasSet.add(option.name);
    aliasSet.add(option.name.toLowerCase());
    aliasSet.add(sanitize(option.name));
  }

  const query = Array.from(aliasSet)
    .map((alias) => alias.trim())
    .filter(Boolean)
    .join('|');

  return query;
}

export function getStateOptionList() {
  return REGISTRATION_STATES;
}


