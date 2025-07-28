import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    soundEnabled: true,
    autoSave: false,
    difficulty: 'medium'
  });

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="settings">
      <h1>設置</h1>
      <div className="settings-content">
        <section className="setting-group">
          <h2>外觀</h2>
          <div className="setting-item">
            <label htmlFor="theme">主題：</label>
            <select
              id="theme"
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
            >
              <option value="light">淺色主題</option>
              <option value="dark">深色主題</option>
              <option value="auto">自動</option>
            </select>
          </div>
        </section>

        <section className="setting-group">
          <h2>遊戲</h2>
          <div className="setting-item">
            <label htmlFor="difficulty">難度：</label>
            <select
              id="difficulty"
              value={settings.difficulty}
              onChange={(e) => handleSettingChange('difficulty', e.target.value)}
            >
              <option value="easy">簡單</option>
              <option value="medium">中等</option>
              <option value="hard">困難</option>
            </select>
          </div>
        </section>

        <section className="setting-group">
          <h2>偏好</h2>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
              />
              啟用音效
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
              />
              自動保存
            </label>
          </div>
        </section>

        <div className="settings-actions">
          <button className="btn btn-primary">保存設置</button>
          <button className="btn btn-secondary">重置為默認</button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 